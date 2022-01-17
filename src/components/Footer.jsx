import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoNavbar from "../images/pngegg (19).png";

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
            <div className="footers">
            <div className="footer-logo">
            <Link to="/">
                <img
                  onClick={() => window.scrollTo(0, 0)}
                  width="100"
                  src={LogoNavbar}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="footer-text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quibusdam maiores adipisci quo qui pariatur, dicta inventore id dolor impedit ut ea accusamus non, optio exercitationem placeat, repellendus quae? Sed?</p>
            </div>
            <div className="footer-cont">
                <ul>
                    <li>
                        <a href="#">0755410910</a>
                    </li>
                    <li>
                        <a href="#">0777458912</a>
                    </li>
                    <li>
                        <a href="#">0555874610</a>
                    </li>
                </ul>
            </div>
            </div>
            </Container>
        </div>
    );
};

export default Footer;