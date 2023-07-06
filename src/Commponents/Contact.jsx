import React, { useState } from 'react'
import web from '../images/logo.jpg'
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'


export const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const Formsubmit = (event) => {
        event.preventDefault();
    }

    const inputVal = (event) => {
        const { name, value } = event.target;
        setData((pre) => {
            return { ...pre, [name]: value }
        })
        setData('');
    }
    return (
        <div id="contact" className='contact'>
            <div className='container'>

                <div className='contact_info'>

                    <img src={web} alt='img' />
                    <h1 className='content'>Contact Us</h1>
                </div>
                <div className='border'></div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='contact_form'>
                            <form className='form' onSubmit={Formsubmit}>
                                <div className='form_field'>
                                    <label for="FormControlInput" className='label'>Name </label><br></br>
                                    <input type="name" value={data.fullname} className="input" name='name' placeholder='Enter Your Name' onChange={inputVal} />
                                </div>

                                <div className='form_field'>
                                    <label for="FormControlInput" className='label'>Mobile Number </label><br></br>
                                    <input type="text" value={data.fullname} className="input" name='name' placeholder='Enter Your phone number' onChange={inputVal} />
                                </div>

                                <div className='form_field'>
                                    <label for="FormControlInput" className='label'>Email </label><br></br>
                                    <input type="Email" value={data.fullname} className="input" name='name' placeholder='Example@gmail.com' onChange={inputVal} />
                                </div>

                                <div className='form_field'>
                                    <label for="FormControlInput" className='label'>Message </label><br></br>
                                    <textarea className='textArea' rows='4' placeholder='type your message'></textarea>
                                </div>
                                <div className="header_btn">
                                    <button className="btn btn_outline1" type="submit"> Submit </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className='contact_icons '>
                            <ul className='contact-ul'>
                                <li> <FaFacebook /> </li>
                                <li> <FaTwitter /> </li>
                                <li> <FaPinterest /></li>
                                <li> <FaInstagram /></li>
                                <li> <FaLinkedin /> </li>
                            </ul>
                        </div>

                        <div className='col-6 com-contact'>
                            <div className='about_detail'> <h2>Name:</h2>
                                <h4> Akhtar</h4>
                            </div>

                            <div className='about_detail'>
                                <h2>Phone:</h2>
                                <div className='detailimg'>
                                    <p><FaPhone /></p>
                                    <a href='tel:+3410293565' >03410293565</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-6 com-contact'>
                            <div className='about_detail'> <h2>Emaik:</h2>

                                <div className='detailimg'>
                                    <p><FaMailBulk /></p>
                                    <a href='mailto:Akhtaremmi@icloud.com' >Akhtaremmi@icloud.com</a>
                                </div>
                            </div>

                            <div className='about_detail'>
                                <h2>Web Address:</h2>
                                <h4> www.example.pk</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
