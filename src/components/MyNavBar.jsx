import React from 'react';
import {CssBaseline, Container } from '@mui/material'
import LogoNavbar from '../images/pngegg (19).png'
import BurgerMenu from './BurgerMenu';

const MyNavBar = () => {
    return (
        <div>
            <React.Fragment>
            <CssBaseline />
                <Container fixed>
                    <div className="navbar">
                        <div className="navbar-left">
                            <img onClick={
                                window.scroll(0, 0)
                            } width="100" src={LogoNavbar} alt="logo" />
                            <div className="search">
                                <input type="text" placeholder='Поиск' />
                            </div>
                        </div>
                        <div className="navbar-right">
                             <p>Войти</p>
                             <div className="burger-menu">
                                 <BurgerMenu/>
                             </div>
                        </div>
                    </div>
                    <div className="navbar-menu">
                        <ul>
                            <li>
                                <a href="#">Пицца</a>
                            </li>
                            <li>
                                <a href="#">Комбо</a>
                            </li>
                            <li>
                                <a href="#">Закуски</a>
                            </li>
                            <li>
                                <a href="#">Десерти</a>
                            </li>
                            <li>
                                <a href="#">Напитки </a>
                            </li>
                        </ul>
                    </div>
                    
                </Container>
            </React.Fragment>



        </div>
    );
};

export default MyNavBar;