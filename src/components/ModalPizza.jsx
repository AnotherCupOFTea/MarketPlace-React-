import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { ClientContext } from "../context/ClientProvider";

const ModalPizza = ({ item }) => {
  const { getModal } = React.useContext(ClientContext);
  const [modal, setModal] = React.useState(false);

  useEffect(() => {
    getModal(setModal);
  }, []);

  console.log(modal);

  if (modal) {
    return (
      <div>
        <div className="my-modal">
          <div className="my-modal-header">
            <h2>{item.name}</h2>
            <Button onClick={() => setModal(false)}>&#10006;</Button>
          </div>
          <div className="my-modal-body">
            <div className="modal-img">
              <img src={item.image} alt="" />
            </div>
          </div>
          <div className="my-modal-footer"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ModalPizza;
