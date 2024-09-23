
export default function SpecialProduct(){
    return (
        <div className="col-sm-6 col-lg-4">
            <article className="product block-md">
                <div className="product-body">
                    <div className="product-info">
                        <div className="product-category">motorcycles</div>
                        <div className="heading-5 product-title">Honda CBR300R</div>
                        <div className="product-figure">
                            <img src="images/product-1-320x240.png" alt=""
                                                             width="320" height="240"/>
                        </div>
                    </div>
                    <div className="product-description">
                        <div className="product-rating"><span
                            className="icon mdi mdi-star-outline"></span><span
                            className="icon mdi mdi-star-outline"></span><span
                            className="icon mdi mdi-star-outline"></span><span
                            className="icon mdi mdi-star-outline"></span><span
                            className="icon mdi mdi-star-outline"></span></div>
                        <p>Honda’s CBR300R has sportbike credentials designed to satisfy any rider.</p><a
                        className="button button-gray-800" href="cart-page.html">Add to cart</a>
                    </div>
                </div>
                <div className="product-panel">
                    <div className="big product-price">$4500.00</div>
                    <div className="product-share">
                        <div className="product-share-button linearicons" data-custom-toggle=""
                             data-custom-toggle-disable-on-blur="true"></div>
                    </div>
                </div>
            </article>
        </div>
    );
}