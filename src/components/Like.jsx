// import React from 'react';
// import { ClientContext } from '../context/ClientProvider';
// import AddToCartIcon from '../images/add-to-cart.png'
// import TickCartIcon from '../images/cart-tick.png'
// import LikeIcon from '../images/heart.png'
// import NotLike from '../images/heart (1).png'

// const Like = ({like, products}) => {
//     console.log(like)
//     const { deleteProductInCart, addAndDeleteProductInCard,addAndDeleteProductInLike, checkProductInCart } =
//     React.useContext(ClientContext);
//     return (
//         <div>
//         {like.map((item) => {
//             <div className="card">
        
//             <img width="100%" src={item.like.image} alt="photo" className="card-img" />
//             <div className="card-buttons">
//               {checkProductInCart(item.like.id) ? (
//                 <button className="card-cart"
                  
//                   onClick={() => addAndDeleteProductInCard(products)}
//                 >
//                   <img width={40} src={TickCartIcon} alt="CartIcon" />
//                 </button>
//               ) : (
//                 <button className="card-cart"
                  
//                   onClick={() => addAndDeleteProductInCard(products)}
//                 >
//                   <img width={40} src={AddToCartIcon} alt="CartIcon" />
//                 </button>
//               )}
//               {checkProductInCart(item.like.id) ? (
//                 <button className="card-like"
                  
//                   onClick={() => addAndDeleteProductInLike(like)}
//                 >gh
//                   <img width={40} src={LikeIcon} alt="CartIcon" />
//                 </button>
//               ) : (
//                 <button className="card-like"
                  
//                   onClick={() => addAndDeleteProductInLike(like)}
//                 >
//                   <img width={40} src={NotLike} alt="CartIcon" />
//                 </button>
//               )}
             
//             </div>
//             <p className="product-name">{item.like.name}</p>
//             <h3 className="card-price"> <strong>Price:</strong> {item.like.price}som</h3>
//             <p className="card-text">{item.like.description}...</p>
           
//           </div>
//         })}
//         </div>
//     );
// };

// export default Like;