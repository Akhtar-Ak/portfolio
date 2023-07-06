import React from 'react'
import {FaMailBulk ,FaPhone} from 'react-icons/fa'


export const About = () => {
    
    return (
        <div className='about' id="about"> 
            <div className='container'>
                <div className='commn'>
                    <h1 className='main_header'> About me </h1>
                    <p className='content'>
                        Hi, i am Akhtar, professional web developer with
                        long time experience in this feild </p>
                    <div className='border'></div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='img_about'>
                            <img src="https://cdn2.vectorstock.com/i/1000x1000/47/61/web-developer-design-vector-6584761.jpg" alt='' />
                        </div>
                    </div>

                    <div className='col-6 '>
                        <div className='about_info'>
                                <h1> Hi there </h1>
                                <div className='about_info_p1'> <p>Hi, i am Akhtar, professional web developer with
                        long time experience in this feild</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
