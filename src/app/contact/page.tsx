"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/HomePage/Footer";
import {useState} from "react";
import Icon from "@mdi/react";
import {mdiInstagram} from "@mdi/js";
import Alert from "@/app/components/Alerts/Alert";

interface ErrorState {
    name?: string;
    surname?: string;
    phone?: string;
    email?: string;
    message?: string;
}


export default function Contact(){
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<ErrorState>({});

    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertType, setAlertType] = useState<string>("");
    const [alertMessage, setAlertMessage] = useState<string>("");

    const validate = () => {
        let isValid:boolean  = true;
        let newErrors: ErrorState = {};

        if (!name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address.";
            isValid = false;
        }

        if (!message.trim()) {
            newErrors.message = "Message cannot be empty.";
            isValid = false;
        }

        setError(newErrors);
        return isValid;
    };



    async function sendForm(e){
        e.preventDefault();
        const contact = {name,email, message};
        if (validate()) {
            console.log(contact);

            const response = await fetch(`/api/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contact)
            });

            if(response.status === 200) {
                console.log(response);
                setShowAlert(true);
                setAlertType("success");
                setAlertMessage("Your email was sent successfully");
            }
            else if(response.status === 500){
                setShowAlert(true);
                setAlertType("error");
                setAlertMessage("Something went wrong");
            }
        }
    }

    return (
        <>
            <div className="page">
                <Header/>
                <section className="section section-xl bg-default">
                    <div className="container">
                        <div className="row row-30 row-md-50">
                            <div className="col-lg-4 col-xl-5">
                                <div className="inset-xl-right-70">
                                    <h3>Have Any Questions?</h3>
                                    <h5 className="title-6">Feel free to contact us using the form on the right.</h5>
                                    <ul className="list-contacts">
                                        <li><span className="icon mdi mdi-phone"></span><a className="big" href="tel:#">+1
                                            800 123 1234</a></li>
                                        <li><span className="icon mdi mdi-map-marker"></span><a className="big"
                                                                                                href="#">652 Main Road,
                                            Apt 12 New York, USA</a></li>
                                        <li><span className="icon mdi mdi-email-outline"></span><a className="big"
                                                                                                   href="mailto:#">info@demolink.org</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xl-7">
                                { showAlert && <Alert type={alertType} message={alertMessage}/> }

                                <form className="rd-form rd-mailform" data-form-output="form-output-global"
                                      data-form-type="contact" onSubmit={sendForm}>
                                    <div className="row row-20 gutter-20">
                                        <div className="col-sm-6">
                                            <div className="form-wrap">
                                                <input onChange={(e) => setName(e.target.value)}
                                                    className="form-input" id="contact-name" type="text" name="name"
                                                       data-constraints="@Required" placeholder="Your Name"/>
                                                    {/*<label className="form-label" htmlFor="contact-name">Your Name</label>*/}
                                                {error.name && <p style={{ color: "red" }}>{error.name}</p>}
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-wrap">
                                                <input onChange={(e) => setEmail(e.target.value)}
                                                    className="form-input" id="contact-email" type="email"
                                                       name="email" data-constraints="@Email @Required" placeholder="E-mail"/>
                                                {error.email && <p style={{ color: "red" }}>{error.email}</p>}
                                                    {/*<label className="form-label" htmlFor="contact-email">E-mail</label>*/}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-wrap">
                                                {/*<label className="form-label" htmlFor="contact-message">Message</label>*/}
                                                <textarea value={message} placeholder="Message"
                                                          onChange={(e) => setMessage(e.target.value)}
                                                    className="form-input" id="contact-message" name="message"
                                                          data-constraints="@Required"></textarea>
                                                {error.message && <p style={{ color: "red" }}>{error.message}</p>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-lg group-custom-1">
                                        <div className="group-custom-ie">
                                            <div className="unit unit-spacing-md form-text">
                                                <div className="unit-left"><span
                                                    className="icon mdi mdi-information-outline"></span></div>
                                                <div className="unit-body">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                                        tellus, luctus nec ullamcorper mattis</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="button button-gray-5" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    );
}