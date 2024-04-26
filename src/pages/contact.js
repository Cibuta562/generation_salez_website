import Navbar from './navbar';
import {useRef, useState} from 'react';
import './contact.css';
import * as emailjs from "@emailjs/browser"; // Import your existing CSS file

function Contact() {
    const [formData, setFormData] = useState({
        nume: '',
        prenume: '',
        telefon: '',
        email: '',
        mesaj: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // You can perform form submission logic here
    //     console.log('Form submitted:', formData);
    //     // You may want to reset the form fields after submission
    //     setFormData({
    //         nume: '',
    //         prenume: '',
    //         telefon: '',
    //         email: '',
    //         mesaj: '',
    //     });
    // };


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <Navbar/>
            <div>
                <header className="App-header">
                    <h1 className="h1-main">Contact Page</h1>
                    <div className="send-to-insta">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="contact-field">
                                <label htmlFor="nume">Nume</label>
                                <input
                                    className="contact-text"
                                    type="text"
                                    id="nume"
                                    name="nume"
                                    value={formData.nume}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label htmlFor="prenume">Prenume</label>
                                <input
                                    className="contact-text"
                                    type="text"
                                    id="prenume"
                                    name="prenume"
                                    value={formData.prenume}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label htmlFor="telefon">Telefon</label>
                                <input
                                    className="contact-text"
                                    type="tel"
                                    id="telefon"
                                    name="telefon"
                                    value={formData.telefon}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="contact-text"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact-field">
                                <label htmlFor="mesaj">Mesaj</label>
                                <textarea
                                    className="contact-text"
                                    id="mesaj"
                                    name="mesaj"
                                    value={formData.mesaj}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="send-btn">
                                Trimite
                            </button>
                        </form>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Contact;

