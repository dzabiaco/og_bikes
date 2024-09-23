import Link from "next/link";

export default function ProductItem(){
    return (
        <div className="col-sm-6 col-lg-4">
            <article className="product block-md">
                <div className="product-body">
                    <div className="product-info">
                        <div className="product-category">motorcycles</div>
                        <div className="heading-5 product-title">Honda CBR300R</div>
                        <div className="product-figure"><img src="images/product-1-320x240.png"
                                                             alt="" width="320" height="240"/>
                        </div>
                    </div>
                    <div className="product-description">
                        <div className="product-rating"><span
                            className="icon mdi mdi-star-outline"></span><span
                            className="icon mdi mdi-star-outline"></span><span
                            className="icon mdi mdi-star-outline"></span><span
                            className="icon mdi mdi-star-outline"></span><span
                            className="icon mdi mdi-star-outline"></span></div>
                        <p className="product-text">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor</p>
                        <Link className="button button-gray-800" href="cart-page.html">Add to cart</Link>
                    </div>
                </div>
            </article>
        </div>
    );
}