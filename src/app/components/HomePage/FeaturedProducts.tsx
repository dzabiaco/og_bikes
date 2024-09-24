"use client";

import SpecialProduct from "@/app/components/HomePage/SpecialProduct";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function FeaturedProducts(){
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
        <section className="section section-xl bg-default text-center">
            <div className="container position-relative">
                <h6 className="title-8 wow fadeInUp">Top products from our shop</h6>
                <h2 className="font-weight-bold wow fadeInUp">Featured Products</h2>
                <div className="row row-xl row-30 row-md-50">

                    {products.slice(0, 3).map((product) => (
                        <SpecialProduct key={product._id} product={product}/>
                    ))}

                    <div className="col-12">
                        <Link className="button button-gradient button-md" href="/shop">View all products</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}