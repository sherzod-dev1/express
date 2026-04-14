import React from 'react';
import './logo.css';

const LogoItem = () => (
    <div className="logo-item">
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
            <path d="M12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8Z" fill="white" />
            <path d="M20 8C20 5.79086 18.2091 4 16 4C13.7909 4 12 5.79086 12 8C12 10.2091 13.7909 12 16 12C18.2091 12 20 10.2091 20 8Z" fill="white" />
            <path d="M16 16C16 13.7909 14.2091 12 12 12C9.79086 12 8 13.7909 8 16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16Z" fill="white" />
            <path d="M24 16C24 13.7909 22.2091 12 20 12C17.7909 12 16 13.7909 16 16C16 18.2091 17.7909 20 20 20C22.2091 20 24 18.2091 24 16Z" fill="white" />
            <path d="M20 24C20 21.7909 18.2091 20 16 20C13.7909 20 12 21.7909 12 24C12 26.2091 13.7909 28 16 28C18.2091 28 20 26.2091 20 24Z" fill="white" />
            <path d="M28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28C26.2091 28 28 26.2091 28 24Z" fill="white" />
        </svg>
        <span className="logo-text">logoipsum</span>
    </div>
);

const Logo = () => {
    return (
        <div className="logo-banner">
            <div className="logo-wrapper">
                <LogoItem />
                <LogoItem />
                <LogoItem />
                <LogoItem />
                <LogoItem />
            </div>
        </div>
    );
};

export default Logo;
