import React from 'react';
import './Footer.css';


export const Footer = () => {
    let year = new Date().getFullYear();


    return (
        <footer className='mt-3 p-3 text-center'>
            <p className='copyright'>&copy; {year}</p>
        </footer>
    );
}