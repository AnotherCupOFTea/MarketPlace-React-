import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MyTable from "../components/MyTable";

import Zakazy from "../components/Zakazy";

const AdminPanel = () => {
  return (
    <div className="admin">
      <Container>
        <Link className="ourproducts" to="/mytable">
          Наши товары
        </Link>
        <h1>Заказы</h1>
        <Zakazy/>
      </Container>
      
    </div>
  );
};

export default AdminPanel;
