

export default function Gallery() {
    return (
        <section className="section">
            <div className="flex" data-items="1" data-sm-items="2" data-md-items="3"
                 data-lg-items="4"
                 data-mouse-drag="false" data-dots="true" data-loop="false" data-lightgallery="group">

                <article className="thumbnail-modern wow fadeIn">
                        <img
                    className="img-duotone" src="../../../../static/images/gallery-1-480x362.jpg"
                    alt="" width="480" height="362" data-gradient-map="#242659, #ade5e4"/>
                </article>

                <article className="thumbnail-modern wow fadeIn" data-wow-delay=".05s">

                    <img className="img-duotone"
                         src="../../../../static/images/gallery-2-480x362.jpg"
                         alt="" width="480"
                         height="362"
                         data-gradient-map="#242659, #ade5e4"/>
                </article>

                <article className="thumbnail-modern wow fadeIn" data-wow-delay=".1s">
                        <img className="img-duotone"
                             src="../../../../static/images/gallery-3-480x362.jpg"
                             alt="" width="480"
                             height="362"
                             data-gradient-map="#242659, #ade5e4"/>
                </article>

                <article className="thumbnail-modern wow fadeIn" data-wow-delay=".15s">
                    <img className="img-duotone"
                         src="../../../../static/images/gallery-4-480x362.jpg"
                         alt="" width="480"
                         height="362"
                         data-gradient-map="#242659, #ade5e4"/>
                </article>
            </div>
        </section>
    );
}