
import { Container } from "@mui/material";
import React from "react";
import AllProducts from "../components/AllProducts";
import HomeMenu from "../components/HomeMenu";


const HomePage = () => {
  return <div>
        <HomeMenu />
       <Container>
           <AllProducts/>
       </Container>
                    
  </div>
}

export default HomePage;
