import React from "react";


const Card = (props) => {
    return (

        <>
            <div className='col_4'>
                <div className='service_card'>
                    <img className='comm_icons' src={props.src} alt={props.src}/>
                    <div className='service_header'>
                        <h5 >{props.title}</h5> </div>
                   
                </div>
            </div>

        </>

    );
}

export default Card;
