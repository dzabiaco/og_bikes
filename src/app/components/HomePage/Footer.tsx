import Link from "next/link";
import Icon from '@mdi/react';
import {mdiFacebook, mdiInstagram, mdiTwitter, mdiYoutube} from '@mdi/js';


export default function Footer(){
    return (
        <footer className="section footer-modern bg-gray-13">
            <div className="footer-modern-body section-lg">
                <div className="container wow fadeInUp">
                    <div className="row row-30 row-md-50 justify-content-md-between">
                        <div className="col-md-6 col-lg-4">
                            <div className="footer-modern-brand">

                                <Link className="brand" href="/">
                                    <img className="brand-logo-dark"
                                         src="../../../../static/images/logo-default-418x78.png" alt=""
                                         width="209" height="39"/>
                                    <img className="brand-logo-light"
                                    src="../../../../static/images/logo-inverse-416x78.png" alt="" width="208" height="39"/>
                                </Link>
                            </div>
                            <p className="footer-caption">Brightcycle bike shop offers a wide variety of motorbikes by
                                recognized
                                manufacturers as well as replacement parts and accessories for bike riders.</p>
                            <div className="footer-modern-list-social">
                                <ul className="list-social list-social-3 list-inline list-inline-xl">
                                    <li>
                                        <Link className="icon mdi mdi-instagram" href="#">
                                            <Icon path={mdiInstagram} size={2} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="icon mdi mdi-facebook" href="#">
                                            <Icon path={mdiFacebook} size={2} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="icon mdi mdi-youtube-play" href="#">
                                            <Icon path={mdiYoutube} size={2} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="icon mdi mdi-twitter" href="#">
                                            <Icon path={mdiTwitter} size={2} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <p className="rights"><span>&nbsp;&copy;&nbsp;</span><span
                                className="copyright-year"></span><span>.&nbsp;</span><span>All Rights
                  Reserved</span><span>.&nbsp;</span><a href="privacy-policy.html">Privacy Policy.</a></p>
                        </div>
                        <div className="col-md-5 col-lg-4 col-xl-3">
                            <div className="heading-5 footer-modern-title">Opening hours</div>
                            <ul className="footer-modern-schedule">
                                <li><span>Mon-Thu</span><span>7 am - 9 pm</span></li>
                                <li><span>Friday</span><span>7 am - 7 pm</span></li>
                                <li><span>Saturday</span><span>7 am - 5 pm</span></li>
                                <li><span>Sunday</span><span>Closed</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="heading-5 footer-modern-title">Motivation</div>
                            <div className="" data-items="1" data-dots="true"
                                 data-autoplay="true"
                                 data-margin="30">

                                <article className="quote-navy">
                                    <div className="quote-navy-text">
                                        <p className="q">Thanks to your wonderful team, this shop has become my #1 place
                                            for motorbike shopping.
                                        </p>
                                    </div>
                                    <div className="quote-navy-title">Amelia Smith</div>
                                </article>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-modern-panel bg-gray-7">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-xl-11">
                            <ul className="footer-modern-nav list-inline">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/shop">Shop</Link></li>
                                <li><Link href="/contact">Contacts</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}