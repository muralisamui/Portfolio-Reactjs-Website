import React from 'react';
// import styles from './Logo.module.css';
// import Murali from '../../../public/company/murali.svg'
import Murali from "/company/murali.svg"

const Logo = () => {
    return (
        <div style={{ padding: "5px 15px" }}>
            <LogoSvg
                color="white"
                width={40}
                height={40}
            />
        </div>
    );
}

const LogoSvg = ({ color, width, height }) => (
    <img src={Murali} alt="murali" style={{ width: width, height: height }} />
);



export default Logo;