import Header from "@/app/components/Header";
import Footer from "@/app/components/HomePage/Footer";
import ProductItem from "@/app/shop/ProductItem";
import {mdiInstagram, mdiMagnify} from "@mdi/js";
import Icon from "@mdi/react";


export default function Page (){
    return (
        <>
            <div className="page">
                <Header/>
                <section className="section section-lg bg-default">
                    <div className="container">
                        <div className="product-filter">
                            <form className="rd-form form-style-2 form-style-3 row no-gutters bordered-4">
                                <div className="col-sm-6 col-md-4">
                                        <select className="w-full h-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" data-placeholder="See all categories" >
                                            <option label="placeholder"></option>
                                            <option>Accessories</option>
                                            <option>Devices</option>
                                            <option>Equipment</option>
                                            <option>Hygiene</option>
                                            <option>Shoewear</option>
                                        </select>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                        <select data-placeholder="Sort by newness" className="w-full h-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option label="placeholder"></option>
                                            <option>Sort by alphabet</option>
                                            <option>Sort by price, ascending</option>
                                            <option>Sort by price, descending</option>
                                        </select>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-wrap form-search">
                                        <input className="form-input" id="rd-search-form-input" type="text" name="s"
                                               autoComplete="off" placeholder="Search"/>
                                            <button className="button-search mdi mdi-magnify" type="submit">
                                                <Icon path={mdiMagnify} size={2} />
                                            </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="row row-xl row-30 row-md-50 row-xl-70">
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                        </div>
                        <div className="pagination-wrap">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="page-item page-item-control disabled">
                                        <a className="page-link"
                                                                                            aria-label="Previous"><span
                                        className="icon" aria-hidden="true"></span></a></li>
                                    <li className="page-item active"><span className="page-link">1</span></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item page-item-control"><a className="page-link"
                                                                                   aria-label="Next"><span
                                        className="icon" aria-hidden="true"></span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    );
}