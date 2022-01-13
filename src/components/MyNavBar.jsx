
import React from 'react';
import {CssBaseline, Container, Button } from '@mui/material'
// import { Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'

import LogoNavbar from '../images/pngegg (19).png'
import LogOutIcon from '../images/pngegg (21).png'
import CartIcon from '../images/pngegg (10).png'
import BurgerMenu from './BurgerMenu';
import { AuthContext } from '../context/AuthProvider';


const MyNavBar = () => {
    const {AuthWithGoogle, user, logout} = React.useContext(AuthContext)
    console.log(user)
    return (
        <div >
            <React.Fragment>
             <div className='backgraound'></div>
            <CssBaseline />
                <Container fixed>
                    <div className="navbar">
                        <div className="navbar-left">
                            <Link to="/">
                            <img onClick={
                                () =>window.scrollTo(0, 0)
                            } width="100" src={LogoNavbar} alt="logo" />
                            </Link>
                            <div className="search">
                                <input type="text" placeholder='Поиск' />
                            </div>
                        </div>
                        <div className="navbar-right">
                             {
                                 user?(
                                     <>
                                         <img className='user-img' width={50} src={user.photoURL} alt="" />
                                        <Button onClick={logout}>
                                                <img width='50' src={LogOutIcon} alt="logout" />
                                        </Button>
                                    </>
                                 ): (
                                    <Button onClick={AuthWithGoogle} color="inherit" >
                                    Войти
                                  </Button>
                                 )
                             }
                             <Link to="/cart">
                                <div className="cart">
                                    <img width={40} src={CartIcon} alt="" />
                                </div>
                             </Link>
                             <div className="burger-menu">
                              <BurgerMenu/>
                             </div>
                        </div>
                    </div>
                    
                    
                </Container>
            </React.Fragment>



        </div>
    );
};

export default MyNavBar;

