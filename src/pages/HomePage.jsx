import { Container, Menu } from "@mui/material";
import React from "react";
import HomeMenu from "../components/HomeMenu";
import MyLoader from "../components/MyLoader";

const HomePage = () => {
  return (
    <div>
      <HomeMenu />
      <Container></Container>
    </div>
  );
};

export default HomePage;
