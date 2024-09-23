import Link from "next/link";

export default function JumboBanner(){
    return (
        <section className="section bg-image-1">
            <div className="">
                <div className="">
                    <div className="">
                        <div className="container">
                            <div className="row row-30 justify-content-center flex-column-reverse flex-lg-row">
                                <div className="col-lg-6">
                                    <div className="">
                                        <img src="../../../../static/images/swiper-img-1-1005x602.png" alt="" width="1005" height="602"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="">
                                        <div className="heading-1"><span
                                            className="d-inline-block d-lg-block">#1 Place</span><span
                                            className="d-inline-block d-lg-block">for Bikes</span></div>
                                        <div className=""><span>We offer a great variety of motorbikes.</span></div>
                                        <Link className="button button-gradient button-lg" href="/shop">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}