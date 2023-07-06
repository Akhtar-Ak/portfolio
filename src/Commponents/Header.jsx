import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram , FaLinkedin} from 'react-icons/fa'

import web1 from '../images/IMG4.png'

const Header = () => {
    return (
        <>
            <header className='header'> 
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='header_content'>
                            <div className='header_sec'>
                               
                                <h1>I am Akhtar </h1>
                                <p> Hi, We are the team of professional web developer with 
                                long time experience in this feild.</p>
                                <div className='header_btn'>
                                    <a href='#contact' className='btn btn_outline'>Contact Us</a> &nbsp; &nbsp; &nbsp;
                                    
                                    <div className='header_ul'>
                                    <a href="https://www.facebook.com/akh.tar.982"> <FaFacebook /></a>
                                    <a href='https://twitter.com/Akhtar01351423?t=aqCXfL8eks8YwTeQO_1VDw&s=08'> <FaTwitter /></a>
                                    {/* <a> <FaPinterest /></a> */}
                                    <a href='https://www.instagram.com/akh_tar45/'> <FaInstagram /></a>
                                    <a href='https://www.linkedin.com/in/akhtar-rasool-1b2242166'> <FaLinkedin/></a>
                                    </div>
                               
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className='col_6'>
                            <img src={web1} alt='img' img/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
