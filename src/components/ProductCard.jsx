import React from 'react';
// import ClientProvider from '../context/ClientProvider';

const ProductCard = ({product}) => {
    console.log(product)
    // const {} = React.useContext(ClientProvider);
    return (
        <div>
            <h1>ALL PRODUCTS</h1>
            <div className="card">
                <p>{product.name}</p>
                <img src={product.image} alt="photo" />
                
            </div>
        </div>
    );
};

export default ProductCard;