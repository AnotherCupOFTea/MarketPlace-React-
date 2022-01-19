import React from 'react';
import { AdminContext } from '../context/AdminProvider';
import ZakazModal from "../components/ZakazModal";

const Zakazy = () => {
    const { getZakaz, deleteProduct, zakaz } =
    React.useContext(AdminContext);

    React.useEffect(() => {
        getZakaz();
    }, []);

    if (!zakaz) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className='zakaz-cont'>
            {
               zakaz.map((item) => {
                   return <div>
                       
                       <ZakazModal zakaz={item} cart={item.cart}/>
                       {/* {console.log(item.cart)} */}
                   </div>
                   
               })
           }
           
        </div>
    );
};

export default Zakazy;