import { Container } from "@mui/material";
import React from "react";
import AllProducts from "../components/AllProducts";
import Header from "../components/Header";
import HomeMenu from "../components/HomeMenu";

const HomePage = () => {

  return <div>
        <HomeMenu />
        <Header/>
       <Container>
           <AllProducts/>
       </Container>
                    
  </div>
}


export default HomePage;
