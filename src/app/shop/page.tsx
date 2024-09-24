"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/HomePage/Footer";
import ProductItem from "@/app/shop/ProductItem";
import {mdiInstagram, mdiMagnify} from "@mdi/js";
import Icon from "@mdi/react";
import {useEffect, useState} from "react";


export default function Page (){
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        const fetchProducts = async () => {
            try {
                const products = await fetch(`/api/product`);
                const data = await products.json();
                setProducts(data.products);
            }
            catch (error){
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts().then(r => {
        });

        console.log(products);
    }, [products]);

    return (
        <>
            <div className="page">
                <Header/>
                <section className="section section-lg bg-default">
                    <div className="container">
                        <div className="product-filter">
                            <form className="rd-form form-style-2 form-style-3 row no-gutters bordered-4">
                                <div className="col-sm-6 col-md-4">
                                        <select className="w-full h-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" data-placeholder="See all categories" >
                                            <option label="placeholder"></option>
                                            <option>Accessories</option>
                                            <option>Devices</option>
                                            <option>Equipment</option>
                                            <option>Hygiene</option>
                                            <option>Shoewear</option>
                                        </select>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                        <select data-placeholder="Sort by newness" className="w-full h-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option label="placeholder"></option>
                                            <option>Sort by alphabet</option>
                                            <option>Sort by price, ascending</option>
                                            <option>Sort by price, descending</option>
                                        </select>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-wrap form-search">
                                        <input className="form-input" id="rd-search-form-input" type="text" name="s"
                                               autoComplete="off" placeholder="Search"/>
                                            <button className="button-search mdi mdi-magnify" type="submit">
                                                <Icon path={mdiMagnify} size={2} />
                                            </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row row-xl row-30 row-md-50 row-xl-70">
                            {products.map((product) => (
                                <ProductItem key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    );
}