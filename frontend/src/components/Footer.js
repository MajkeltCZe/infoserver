import React from 'react';
import { FOOTER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import './Footer.css';

export const Footer = () => {
    const { loading, error, data } = useQuery(FOOTER);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{JSON.stringify(error)}</p>;
    const footer = data.footer.data.attributes;
    let year = new Date().getFullYear();

    return (
        <footer className='mt-3 p-3 text-center'>
            <p className='copyright'>&copy; {year}, IT2 - {footer.authors}</p>
            <img
                className=" dino"
                src={`http://localhost:1337${footer.img.data.attributes.url}`}
                alt="dinosaur"
            />


        </footer>
    );
}