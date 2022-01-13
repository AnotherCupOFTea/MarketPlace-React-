import { Container } from '@mui/material';
import React from 'react';
import TopIcon from '../images/pngegg (20).png'

const ProductMenu = () => {
    return (
        <div>
                  <Container>
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
                    
                        <img onClick={() => window.scroll(0, 0)} className='top-icon' src={TopIcon} alt="" />
                      </Container>
        </div>
    );
};

export default ProductMenu;