import Link from "next/link";


export default function AboutSection(){
    return (
        <section className="section bg-gray-100 section-xxl position-relative overflow-hidden">
            <div className="floating-text__left">About</div>
            <div className="container">
                <div className="row justify-content-center flex-lg-row-reverse justify-content-xl-between row-40">
                    <div className="col-md-11 col-lg-5 wow fadeInRight">
                        <h6 className="title-8">A few Words about us</h6>
                        <h2 className="font-weight-bold">#1 Motorbike Shop</h2>
                        <p className="big">Brightcycle bike shop is one of America’s best motorcycle shops that has been
                            offering
                            premium motorcycles, service, and parts since 1999.</p>
                        <Link className="button button-md button-gradient" href="/about">learn More</Link>
                    </div>
                    <div className="col-sm-10 col-md-8 col-lg-7 col-xl-6 wow fadeIn">
                        <article className="video-modern">
                            <img className="video-modern-image"
                                 src="../../../../static/images/video-bg-1-584x385.jpg" alt=""
                                 width="584" height="385"/><a
                            className="video-modern-link"
                            href="https://www.youtube.com/watch?v=1UWpbtUupQQ" data-lightgallery="item"><span
                            className="icon mdi mdi-play"></span></a>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}