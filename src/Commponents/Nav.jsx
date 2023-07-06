import React from 'react'

import web from '../images/logo.jpg'
const Nav = () => {
    return (
        <>
            <nav className='navebar'>
                <div className='container'>
                    <div className='nave_container'>
                        <ul className='nav_left'>
                            <div className='logo'>
                                <img src={web} alt='logo' />
                                <h1>Akhtar</h1>
                            </div>
                        </ul>
                        <ul className='nav_right'>
                            <li><a href='/'> Home </a> </li>
                            <li><a href='#services'> Services </a> </li>
                            <li><a href='#about'> About </a> </li>
                            <li><a href='#skills'> Skills </a> </li>
                            <li><a href='#contact'> Contact </a> </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default Nav;