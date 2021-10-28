import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <img 
                className='header_cover' 
                src={process.env.PUBLIC_URL + `/Capture.PNG`}
                alt='' 
            />
        </header>
    )
}

export default Header
