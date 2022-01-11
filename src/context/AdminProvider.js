import React from "react";

const AdminContext = React.createContext();

const Init_State = {};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AdminProvider = () => {
  const [state, dispatch] = React.useReducer(reducer, Init_State);

  // ! Create

  return <div></div>;
};

export default AdminProvider;
