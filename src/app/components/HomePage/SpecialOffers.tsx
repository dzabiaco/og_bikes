import Link from "next/link";


export default function SpecialOffers(){
    return (
        <section className="section section-xl bg-gray-100 text-center position-relative overflow-hidden">
            <div className="floating-text__right">Sale</div>
            <div className="container position-relative">
                <h6 className="title-8 wow fadeInUp">list of the latest promotions</h6>
                <h2 className="font-weight-bold wow fadeInUp">special offers</h2>
                <div className="row row-30 row-narrow-80 row-xl">
                    <div className="col-lg-6">
                        <Link className="box-offer" href="/shop">
                        <div className="box-offer__header">
                            <div className="box-offer__media">
                                <img src="../../../../static/images/home-img-1-290x331.jpg" alt="" width="290" height="331"/>
                            </div>
                            <h2 className="box-offer__title"><span>2019</span><span>year</span><span>models</span></h2>
                            <div className="box-offer__sale">
                                <div className="big">20</div>
                                <div className="sale-group"><span className="percent">%</span><span>off</span></div>
                            </div>
                        </div>
                        <div className="box-offer__footer">
                            <h4>Kawasaki, Honda, and Yamaha</h4><span>available while stocks last</span>
                        </div>
                    </Link></div>
                    <div className="col-lg-6">
                        <Link className="box-offer reverse" href="/shop">
                        <div className="box-offer__header">
                            <div className="box-offer__media">
                                <img src="../../../../static/images/home-img-2-181x335.png" alt="" width="181" height="335"/>
                            </div>
                            <h2 className="box-offer__title"><span>Grab</span><span>Your</span><span>Honda</span></h2>
                            <div className="box-offer__sale">
                                <div className="sale-group"><span>$</span>
                                    <div className="big">200</div>
                                    <span>off</span>
                                </div>
                            </div>
                        </div>
                        <div className="box-offer__footer">
                            <h4>Honda CBR1000RR</h4><span>on sale until June 15</span>
                        </div>
                    </Link></div>
                </div>
            </div>
        </section>
    );
}