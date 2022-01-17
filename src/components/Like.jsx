import React from 'react';
import { ClientContext } from '../context/ClientProvider';
import AddToCartIcon from '../images/add-to-cart.png'
import TickCartIcon from '../images/cart-tick.png'
import LikeIcon from '../images/heart.png'
import NotLike from '../images/heart (1).png'

const Like = ({like}) => {
    // console.log(like)
    const { addAndDeleteProductInCard,addAndDeleteProductInLike, checkProductInCart, checkProductInLike } =
    React.useContext(ClientContext);
    console.log(like)
    return (
        <div>
        {like.products.map((item) => {

           return <div className="card">
        
            <img width="100%" src={item.product.image} alt="photo" className="card-img" />
            <div className="card-buttons">
              {checkProductInCart(item.product.id) ? (
                <button className="card-cart"
                  
                  onClick={() => addAndDeleteProductInCard(item.product)}
                >
                  <img width={40} src={TickCartIcon} alt="CartIcon" />
                </button>
              ) : (
                <button className="card-cart"
                  
                  onClick={() => addAndDeleteProductInCard(item.product)}
                >
                  <img width={40} src={AddToCartIcon} alt="CartIcon" />
                </button>
              )}
              {checkProductInLike(item.product.id) ? (
                <button className="card-like"
                  
                  onClick={() => addAndDeleteProductInLike(item.product)}
                >
                  <img width={40} src={LikeIcon} alt="CartIcon" />
                </button>
              ) : (
                <button className="card-like"
                  
                  onClick={() => addAndDeleteProductInLike(item.product)}
                >
                  <img width={40} src={NotLike} alt="CartIcon" />
                </button>
              )}
             
            </div>
            <p className="product-name">{item.product.name}</p>
            <h3 className="card-price"> <strong>Price:</strong> {item.product.price}som</h3>
            <p className="card-text">{item.product.description}...</p>
           
          </div>
        })}
        </div>
    );
};

export default Like;