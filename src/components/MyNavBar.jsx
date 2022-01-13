import React from "react";
import { CssBaseline, Container } from "@mui/material";
import LogoNavbar from "../images/pngegg (19).png";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <div className="navbar">
            <div className="navbar-left">
              <Link to="/">
                <img
                  onClick={window.scroll(0, 0)}
                  width="100"
                  src={LogoNavbar}
                  alt="logo"
                />
              </Link>
              <div className="search">
                <input type="text" placeholder="Поиск" />
              </div>
            </div>
            <div className="navbar-right">
              <p>Войти</p>
              <div className="burger-menu">
                <BurgerMenu />
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default MyNavBar;
