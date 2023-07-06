import React from 'react'
import SerData from './SerData';
import Card from './Card';


const Services = () => {
    return (
        <div id='services' className='services'>
            <div className='container'>
                <div className='services_header'>
                    <div className='commn'>
                        <h1 className='main_header'> My Srevices </h1>
                        <p className='content'>
                            Hi, i am Akhtar, professional web developer with
                            long time experience in this feild </p>
                    </div>
                    <div className='border'></div>


                    <div className='row'>
                        {SerData.map((val, indx) => {
                           
                            return (
                                <Card
                                key={indx}
                                src={val.icon}
                                title={val.title}
                                discription={val.discription}
                            />
                            )})
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;