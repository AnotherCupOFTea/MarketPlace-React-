import React from "react";
import axios from "axios";
import { API } from "../helpers/const";

export const ClientContext = React.createContext();

const Init_State = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const ClientProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, Init_State);

  // ! Read

  const getClientProducts = async () => {
    const response = await axios(API);
    console.log(response);
  };

  return (
    <ClientContext.Provider value={{ getClientProducts }}>
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
