import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Zakazy from './Zakazy';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function ZakazModal({zakaz, cart}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
      
              
                       <div className="zakaz-name">
                        <h1>{zakaz.name}</h1>
                        <p>Общая сумма: {zakaz.totalPrice} сом</p>
                       </div>
                      
                
           
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>{zakaz.name}</h1>
        {
            cart.map((item) => {
                return <div>
                    
                    <p>Количество: {item.count} - {item.product.name}</p>
                </div>
            })
        } 
        </Box>
      </Modal>
    </div>
  );
}
