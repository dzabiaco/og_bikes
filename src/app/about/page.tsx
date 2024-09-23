import Header from "@/app/components/Header";
import Footer from "@/app/components/HomePage/Footer";
import {mdiPlay} from "@mdi/js";
import Icon from "@mdi/react";


export default function About(){
    return (
        <div className="page">
            <Header/>
            <section className="section section-xl bg-default">
                <div className="container">
                    <div className="row row-30 row-lg-50">
                        <div className="col-lg-6">
                            <article className="video-classic video">
                                <div className="video-figure">
                                    <img className="video-image"
                                         src="../../../../static/images/video-bg-1-584x385.jpg" alt=""
                                         width="584" height="385"/>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-6">
                            <div className="inset-xl-left-70">
                                <h2>Our Mission</h2>
                                <article className="quote-minimal">
                                    <div className="heading-4 quote-minimal-text">
                                        <p className="q">We aim to offer the best motorbikes, gears, apparel, and
                                            accessories.</p>
                                    </div>
                                </article>
                                <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing commodo elit
                                    at imperdiet dui. Mauris ultrices eros in cursus turpis massa tincidunt dui. Eget
                                    dolor morbi non arcu risus quis varius quam quisque.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-lg bg-gray-700 text-center bg-img-2">
                <div className="container">
                    <div className="row row-30 justify-content-center">
                        <div className="col-sm-6 col-md-4">
                            <div className="counter-wrap block-sm">
                                <div className="counter-main">
                                    <div className="heading-1 counter-number counter">450</div>
                                    <div className="heading-3 counter-postfix">k</div>
                                </div>
                                <div className="big counter-text">Motorcycle Models</div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="counter-wrap block-sm">
                                <div className="counter-main">
                                    <div className="heading-1 counter-number counter">78</div>
                                </div>
                                <div className="big counter-text">Awards</div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="counter-wrap block-sm">
                                <div className="counter-main">
                                    <div className="heading-1 counter-number counter">600</div>
                                    <div className="heading-3 counter-postfix">+</div>
                                </div>
                                <div className="big counter-text">Satisfied Customers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-xl bg-default text-center">
                <div className="container">
                    <h2>Our team</h2>
                    <div className="row row-xl row-30">
                        <div className="col-sm-6 col-lg-4">
                            <article className="team block-md">
                                <img className="team-image"
                                     src="../../../../static/images/team-1-370x314.jpg" alt="" width="370"
                                     height="314"/>
                                <div className="team-content">
                                    <div>
                                        <div className="team-position">Managing Director</div>
                                        <div className="heading-5 team-name">
                                            <span>Shawn Gray</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <article className="team block-md">
                                <img className="team-image"
                                     src="../../../../static/images/team-2-370x314.jpg" alt="" width="370"
                                     height="314"/>
                                <div className="team-content">
                                    <div>
                                        <div className="team-position">Sales Manager</div>
                                        <div className="heading-5 team-name">
                                            <span href="team-member.html">Jessica
                                            Roberts</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <article className="team block-md">
                                <img className="team-image"
                                     src="../../../../static/images/team-3-370x314.jpg" alt="" width="370"
                                     height="314"/>
                                <div className="team-content">
                                    <div>
                                        <div className="team-position">Customer Care manager</div>
                                        <div className="heading-5 team-name">
                                            <span href="team-member.html">George
                                            Garcia</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-6 col-lg-4">

                            <article className="team block-md">
                                <img className="team-image"
                                     src="../../../../static/images//team-4-370x314.jpg" alt="" width="370"
                                                                    height="314"/>
                                <div className="team-content">
                                    <div>
                                        <div className="team-position">Marketing Manager</div>
                                        <div className="heading-5 team-name">
                                            <span href="team-member.html">Pamela Lewis</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <article className="team block-md">
                                <img className="team-image"
                                     src="../../../../static/images/team-5-370x314.jpg" alt="" width="370"
                                     height="314"/>
                                <div className="team-content">
                                    <div>
                                        <div className="team-position">Lead Technician</div>
                                        <div className="heading-5 team-name">
                                            <span href="team-member.html">Jim Walker</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <article className="team block-md">
                                <img className="team-image"
                                     src="../../../../static/images/team-6-370x314.jpg" alt="" width="370"
                                     height="314"/>
                                <div className="team-content">
                                    <div>
                                        <div className="team-position">Apprentice Technician</div>
                                        <div className="heading-5 team-name">
                                            <span href="team-member.html">John
                                            Mitchell</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-gray-13">
                <div className="row no-gutters bordered-1">
                    <div className="col-sm-6 col-xl-3">
                        <article className="box-classic box-advantages box-classic-1 wow fadeInUp">
                            <div className="box-classic-icon mdi mdi-reply"></div>
                            <div className="heading-4 box-classic-title">Reasonable prices</div>
                            <div className="big box-classic-text">If you didn’t like your bike, you can always return it
                                during the first 2 weeks of its usage.
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <article className="box-classic box-advantages box-classic-1 wow fadeInUp"
                                 data-wow-delay=".05s">
                            <div className="box-classic-icon mdi mdi-account-star-variant"></div>
                            <div className="heading-4 box-classic-title">Professional Team</div>
                            <div className="big box-classic-text">Our sales managers and consultants are always glad to
                                help you choose a bike.
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <article className="box-classic box-advantages box-classic-1 wow fadeInUp" data-wow-delay=".1s">
                            <div className="box-classic-icon mdi mdi-truck"></div>
                            <div className="heading-4 box-classic-title">Free Delivery</div>
                            <div className="big box-classic-text">Our delivery service guarantees quick and secure
                                delivery of your favorite motorcycle.
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <article className="box-classic box-advantages box-classic-1 wow fadeInUp"
                                 data-wow-delay=".15s">
                            <div className="box-classic-icon mdi mdi-cash-usd"></div>
                            <div className="heading-4 box-classic-title">payment Methods</div>
                            <div className="big box-classic-text">We offer a variety of payment methods including cash,
                                credit cards, and cheques.
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="section section-xl bg-default text-center">
                <div className="container">
                    <h2>Our partners</h2>
                    <p className="big">Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Enim
                        lobortis scelerisque fermentum <br className="d-none d-xl-block"/>dui faucibus. A lacus
                            vestibulum sed arcu non. Eu tincidunt tortor aliquam nulla facilisi.</p>
                    <div className="row row-xl row-30">
                        <div className="col-sm-4 col-lg-3">
                                <img src="../../../../static/images/client-1-270x145.png" alt="" width="270" height="145"/>

                        </div>
                        <div className="col-sm-4 col-lg-3">
                                <img src="../../../../static/images/client-2-270x145.png" alt="" width="270" height="145"/>
                        </div>
                        <div className="col-sm-4 col-lg-3">
                            <img src="../../../../static/images/client-3-270x145.png" alt="" width="270" height="145"/>
                        </div>
                        <div className="col-sm-4 col-lg-3">
                            <img src="../../../../static/images/client-4-270x145.png" alt="" width="270" height="145"/>
                        </div>
                        <div className="col-sm-4 col-lg-3">
                            <img src="../../../../static/images/client-5-270x145.png" alt="" width="270" height="145"/>
                        </div>
                        <div className="col-sm-4 col-lg-3">
                            <img src="../../../../static/images/client-6-270x145.png" alt="" width="270" height="145"/>
                        </div>
                        <div className="col-sm-4 col-lg-3">
                            <img src="../../../../static/images/client-7-270x145.png" alt="" width="270" height="145"/>
                        </div>
                        <div className="col-sm-4 col-lg-3">
                            <img src="../../../../static/images/client-8-270x145.png" alt="" width="270" height="145"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}