import {Fragment} from "react";
import Header from "@/app/components/Header";
import JumboBanner from "@/app/components/HomePage/JumboBanner";
import SpecialOffers from "@/app/components/HomePage/SpecialOffers";
import FeaturedProducts from "@/app/components/HomePage/FeaturedProducts";
import AboutSection from "@/app/components/HomePage/AboutSection";
import Benefits from "@/app/components/HomePage/Benifits";
import Stats from "@/app/components/HomePage/Stats";
import CTA from "@/app/components/HomePage/CTA";
import Gallery from "@/app/components/HomePage/Gallery";
import Footer from "@/app/components/HomePage/Footer";

export default function RootPage(){
    return (
        <Fragment>
            <div className="page">
                <Header/>
                <JumboBanner/>
                <SpecialOffers/>
                <FeaturedProducts/>
                <AboutSection/>
                <Benefits/>
                <Stats/>
                <CTA/>
                <Gallery/>
                <Footer/>
            </div>
        </Fragment>
    );
}