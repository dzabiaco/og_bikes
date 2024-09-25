"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/HomePage/Footer";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "@/app/components/Spinner/Spinner";

export default function ProductPage() {
    const [product, setProduct] = useState(null); // Initialize as null
    const [spinner, setSpinner] = useState(false); // TypeScript will infer this as boolean
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setSpinner(true);
                const response = await fetch(`/api/product/${id}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        setLoading(false);
                        throw new Error("Product not found");
                    }
                    setLoading(false);
                    throw new Error("Failed to fetch product");
                }

                const data = await response.json();
                setProduct(data.product);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            } finally {
                setSpinner(false);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        if (error === "Product not found") {
            notFound(); // Redirect to 404 page
        }
    }, [error]);

    if (spinner) return <Spinner />;

    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="page">
                <Header />
                <section className="section section-lg bg-default">
                    <div className="container">
                        <div className="row row-30">
                            <div className="col-lg-6">
                                <div className="slick-vertical slick-product">
                                    <div
                                        className="slick-slider carousel-parent"
                                        id="carousel-parent"
                                        data-items="1"
                                        data-swipe="true"
                                        data-child="#child-carousel"
                                        data-for="#child-carousel"
                                    >
                                        <div className="item">
                                            <div className="slick-product-figure">
                                                <img
                                                    src={`http://localhost:3000/static/images/products/${product?.images || "default.jpg"}`}
                                                    alt={product?.title || "Product Image"}
                                                    width="530"
                                                    height="480"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="single-product">
                                    <h3 className="single-product-title">{product?.title}</h3>
                                    <div className="group-md group-inline">
                                        <div className="heading-5 single-product-price">${product?.price}</div>
                                        <div className="single-product-rating">
                                            <span className="icon mdi mdi-star"></span>
                                            <span className="icon mdi mdi-star"></span>
                                            <span className="icon mdi mdi-star"></span>
                                            <span className="icon mdi mdi-star"></span>
                                            <span className="icon mdi mdi-star-half"></span>
                                        </div>
                                    </div>
                                    <p>{product?.content}</p>
                                    <hr className="hr-24 hr-gray-100" />
                                    <ul className="list-description">
                                        <li>
                                            <span>Categories:</span>
                                            <span>{product?.category}</span>
                                        </li>
                                    </ul>
                                    <div className="group-md group-middle">
                                        <div className="stepper-style-1">
                                            <input type="number" data-zeros="true" defaultValue={1} min="1" max="1000" />
                                        </div>
                                        <div>
                                            <a className="button button-lg button-gradient" href="cart-page.html">
                                                Add to cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
}