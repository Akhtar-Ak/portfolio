import React from 'react'
import { NavLink } from 'react-router-dom';

export const Prices = () => {
    const state = [
        {
            id: 1,
            heading: "Basic",
            price: 50,
            msg1: "50GB Storage space",
            msg2: "20GB MOnthly Bandwidth",
            msg3: "My SQL Database",
            msg4: "100 Email account",
            msg5: "10 Free Domain Name"
        },
        {
            id: 2,
            heading: "Standerd",
            price: 80,
            msg1: "50GB Storage space",
            msg2: "20GB MOnthly Bandwidth",
            msg3: "My SQL Database",
            msg4: "100 Email account",
            msg5: "10 Free Domain Name",
            button: "Click"
        },
        {
            id: 3,
            heading: "Premium",
            price: 160,
            msg1: "50GB Storage space",
            msg2: "20GB MOnthly Bandwidth",
            msg3: "My SQL Database",
            msg4: "100 Email account",
            msg5: "10 Free Domain Name"
        }
    ];

    return (
        <div id ='prices'className='prices'>
            <div className='container'>
                <div className='commn'>
                    <h5 className='heading'> CHOOSE A PLAN </h5>
                    <h1 className='main_header'> Pricing Plan </h1>
                    <p className='content'>
                        Hi, i am Akhtar, professional web developer with
                        long time experience in this feild </p>
                    <div className='border'></div>
                </div>

                <div className='row'>
                    {state.map(prices => (
                        <div className='col_4' key={prices.id}>
                        
                            <div className='price_menu'>
                            <div className='recomnd_btn'>
                            {/* {(prices.button)? prices.button : ""} */}
                            </div>
                                <div className='price_header'>
                                    <h1> {prices.heading} </h1>
                                </div>

                                <div className='price_tage'>
                                    <p> <span>$</span> {prices.price}</p>
                                </div>
                                <ul>
                                
                                    <li>{prices.msg1}</li>
                                    <li>{prices.msg2}</li>
                                    <li>{prices.msg3}</li>

                                    <li>{prices.msg4}</li>
                                    <li>{prices.msg5}</li>
                                </ul>

                                <div className='pricr_btn'>
                                    <NavLink to='/' className='btn btn_outline'>
                                        Purchase
                                    </NavLink>
                                </div>

                            </div>
                        </div>)
                    )}

                </div>
            </div>
        </div>
    )
}
