import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar_Center'>
                <div className='navbar_Items'>
                    <div className='navbar_Item'>
                        <p>الصفحة الرئيسية</p>
                    </div>
                </div>
                <div className='navbar_Items'>
                    <div className='navbar_Item'>
                        <Link className='link' to="/numbers">
                            <p>أعداد المجلة</p>
                        </Link>
                    </div>
                </div>
                <div className='navbar_Items'>
                    <div className='navbar_Item'>
                        <Link className='link' to="/">
                            <p>فريق المجلة</p>
                        </Link>
                    </div>
                </div>
                <div className='navbar_Items'>
                    <div className='navbar_Item'>
                        <p>أتبرع/Donation</p>
                    </div>
                </div>
                <div className='navbar_Items'>
                    <div className='navbar_Item'>
                        <Link className='link' to="/contact">
                            <p>تواصل معنا</p>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
