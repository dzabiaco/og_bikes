import SpecialProduct from "@/app/components/HomePage/SpecialProduct";
import Link from "next/link";

export default function FeaturedProducts(){
    return (
        <section className="section section-xl bg-default text-center">
            <div className="container position-relative">
                <h6 className="title-8 wow fadeInUp">Top products from our shop</h6>
                <h2 className="font-weight-bold wow fadeInUp">Featured Products</h2>
                <div className="row row-xl row-30 row-md-50">
                    <SpecialProduct/>
                    <SpecialProduct/>
                    <SpecialProduct/>

                    <div className="col-12">
                        <Link className="button button-gradient button-md" href="/shop">View all products</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}