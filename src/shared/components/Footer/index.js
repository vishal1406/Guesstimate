import React from 'react';
import './footer.css'

const Footer = ({ }) => {
    return (
        <div className="footer">{`© ${(new Date().getFullYear())} Guesstimate - Created with ❤️ by VZ`}</div>
    )
}

export default Footer