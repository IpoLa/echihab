import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar_Center'>
                <div className='navbar_Items'>
                    <div className='navbar_Item'>
                        <Link className='link' to="/">
                            <p>الصفحة الرئيسية</p>
                        </Link>
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
                        <Link className='link' to="/team">
                            <p>فريق المجلة</p>
                        </Link>
                    </div>
                </div>
                <div className='navbar_Items'>
                    <div className='navbar_Item'>
                        <Link className='link' to={{ pathname: "https://www.paypal.com/donate?token=-_DbW3TGtjrET5eTRpFdbz-lPvjDPerlg_Kc9aA4AtpVy52J0xxO6Btf08foUqsot5yqJz-4zVfQi0de" }} target="_blank" >
                            <p>أتبرع/Donation</p>
                        </Link>
                    </div>
                </div>
                {/* <div className='navbar_Items'>
                    <div className='navbar_Item'>
                        <Link className='link' to="/contact">
                            <p>تواصل معنا</p>
                        </Link>
                    </div>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar
