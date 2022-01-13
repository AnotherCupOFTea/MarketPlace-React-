import { Container } from '@mui/material';
import React from 'react';
import HeaderImg from '../images/header-img.png'

const Header = () => {
    return (
        <div>
            <Container>
                <div className="header d-flex">
                    <div className="header-content">
                        <p>Lorem, ipsum dolor.</p>
                        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum corporis, quam reiciendis velit officiis ipsam odio doloribus iste quisquam?</p>
                         <div className="header-btns">
                             <button className='zakaz-btn'>Заказать</button>
                             <button className='call-btn'>Позвонить</button>
                         </div>
                    </div>
                    <div className="header-img">
                     <img width={400} src={HeaderImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;