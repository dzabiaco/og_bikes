import Link from "next/link";

export default function CTA (){
    return (
        <section className="section section-lg text-center">
            <div className="container wow fadeInUp">
                <h6 className="title-8">Have a Question?</h6>
                <h2 className="font-weight-bold">Contact Us now</h2>
                <p className="big">We are always happy to answer all your questions.</p>
                <Link className="button button-lg button-gradient" href="/contact">
                    Get in touch
                </Link>
            </div>
        </section>
    );
}