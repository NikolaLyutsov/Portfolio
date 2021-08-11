import { IdentificationIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import "./Contact.css";
import { db } from "../../firebase";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("contacts")
        .add({
            name: name,
            email: email,
            message: message
        })
        .then(() => { alert('Message sent!') })
            .catch((error) => { alert(error.message);
            });

            setName('');
            setEmail('');
            setMessage('');
    }

    return (
        <section id="contact" className="relative">
            <div className="containerContact">
                <div className='startContact'>
                    <IdentificationIcon className='identificationIcon' />
                    <h1>Contact</h1>
                </div>
                <div className='contactContainer'>
                    <iframe
                        className="googleMaps"
                        src="https://www.google.com/maps/embed/v1/place?q=бул.+„Черни+връх“,+1421+ж.к.+Лозенец,+София&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="info">
                        <div className="info1">
                            <h2 className="hd2">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                bul. "Cherni vruh"Nº8<br />
                                j.k. Lozenets, Sofia
                            </p>
                        </div>
                        <div className="info2">
                            <h2 className="hd2">
                                EMAIL
                            </h2>
                            <a>nikola_lyutsov@abv.bg</a>
                            <h2 className="hd2">
                                GitHub
                            </h2>
                            <a className="contactLink" href='https://github.com/NikolaLyutsov'>
                                github.com/NikolaLyutsov
                            </a><h2 className="hd2">
                                Linkedin
                            </h2>
                            <a className="contactLink" href='https://www.linkedin.com/in/nikola-lyutsov-154538197/'>
                                www.linkedin.com/in/nikola-lyutsov-154538197/
                            </a>
                            <h2 className="hd2">
                                PHONE
                            </h2>
                            <p>0888548202</p>
                        </div>
                    </div>
                </div>
                <form
                    netlify
                    name="contact"
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <div className='formIntro' id='hireMe'>
                        <h2 className="hd2">
                            Hire Me
                        </h2>
                        <p className="hireText">
                            If you think I would be a good match for your team, please
                            contact me! I would be glad to join your team!
                        </p>
                    </div>
                    <div className='formInputs'>
                        <div className="input">
                            <label htmlFor="name" className="hd3">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="nametext"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="email" className="hd3">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="emailText"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input">
                            <label
                                htmlFor="message"
                                className="hd3">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="messageText"
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}