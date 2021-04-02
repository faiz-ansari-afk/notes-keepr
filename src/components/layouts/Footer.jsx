import React from 'react'

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
        <p>{year} copyright md.faiz</p>
        
        </footer>
    )
}
export default Footer;