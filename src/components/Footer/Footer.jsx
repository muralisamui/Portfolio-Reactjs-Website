import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
        <div>Made with ❤️ by <a className={styles.nameLink} href="https://www.linkedin.com/in/murali-samui-479a91163/" target="_blank" rel="noopener noreferrer">
            Murali Samui
        </a></div>
    </footer>
);

export default Footer;
