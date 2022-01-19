import React from 'react';
import ModalZakazat from './ModalZakazat';

const CartTotalPrice = ({totalPrice, cart}) => {
    console.log(totalPrice)
    return (
        <div className='total'> 
           
            <h1>Общая сумма: {totalPrice} сом</h1>
            
               <ModalZakazat cart={cart} totalPrice={totalPrice}/>
          
        </div>
    );
};

export default CartTotalPrice;