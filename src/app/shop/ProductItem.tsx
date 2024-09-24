import Link from "next/link";

export default function ProductItem({product}){
    return (
        <div className="col-sm-6 col-lg-4">
            <article className="product block-md">
                <div className="product-body">
                    <div className="product-info">
                        <div className="product-category">{product.category}</div>
                        <div className="heading-5 product-title">{product.title}</div>
                        <div className="product-figure">
                            <img src={`http://localhost:3000/static/images/products/${product.images}`}
                                 alt="" width="320" height="240"/>
                        </div>
                    </div>
                    <div className="product-description">
                        <div className="product-rating">
                            <span className="icon mdi mdi-star-outline"></span>
                            <span className="icon mdi mdi-star-outline"></span>
                            <span className="icon mdi mdi-star-outline"></span>
                            <span className="icon mdi mdi-star-outline"></span>
                            <span className="icon mdi mdi-star-outline"></span>
                        </div>
                        <p className="product-text">{product.content.slice(0,78)}</p>
                        <Link className="button button-gray-800" href="cart-page.html">
                            Show Product
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}