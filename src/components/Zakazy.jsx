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
           <ZakazModal zakaz={zakaz}/>
           
        </div>
    );
};

export default Zakazy;