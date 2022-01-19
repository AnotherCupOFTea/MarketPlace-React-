import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ClientContext } from "../context/ClientProvider";
import AddToCartIcon from '../images/add-to-cart.png'
import TickCartIcon from '../images/cart-tick.png'
import LikeIcon from '../images/heart.png'
import NotLike from '../images/heart (1).png'
import ClearIcon from '@mui/icons-material/Clear';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "20px",
  outLine: "none",
  pt: 2,
  px: 4,
  pb: 3,
};



export default function OurProduct({product, open, handleClose}) {
    const { addAndDeleteProductInCard,addAndDeleteProductInLike, checkProductInCart, checkProductInLike } =
    React.useContext(ClientContext);

  return (
    <div>
      {/* <button onClick={handleOpen}><img width="100%" src={product.image} alt="photo" className="card-img" /></button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box  sx={{ ...style, }}>
            <div onClick={handleClose} className="modal-close-btn">&#10060;</div>
            <div className="modal">
                <div className="modal-img">
                <img width={300} src={product.image} alt={product.name} />
                </div>
                <div className="modal-content">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>Цена: {product.price} сом</h3>
                    <div className="card-buttons">
                    {checkProductInCart(product.id) ? (
                        <button className="card-cart"
                        
                        onClick={() => addAndDeleteProductInCard(product)}
                        >
                        <img width={40} src={TickCartIcon} alt="CartIcon" />
                        </button>
                    ) : (
                        <button className="card-cart"
                        
                        onClick={() => addAndDeleteProductInCard(product)}
                        >
                        <img width={40} src={AddToCartIcon} alt="CartIcon" />
                        </button>
                    )}
                    {checkProductInLike(product.id) ? (
                        <button className="card-like"
                        
                        onClick={() => addAndDeleteProductInLike(product)}
                        >
                        <img width={40} src={LikeIcon} alt="CartIcon" />
                        </button>
                    ) : (
                        <button className="card-like"
                        
                        onClick={() => addAndDeleteProductInLike(product)}
                        >
                        <img width={40} src={NotLike} alt="CartIcon" />
                        </button>
                    )}
                    
                    </div>
                </div>
            </div>
         
         
        </Box>
      </Modal>
    </div>
  );
}
