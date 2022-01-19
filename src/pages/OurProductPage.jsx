import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import MyTable from "../components/MyTable";

const OurProductPage = () => {
    return (
        <div className='admin'>
            <Container>
                <Link className="ourproducts" to="/admin">
                  Назад
                </Link>
            
            </Container>
            <MyTable/>
        </div>
    );
};

export default OurProductPage;