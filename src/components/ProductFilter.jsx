import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";

const ProductFilter = () => {
  let search = new URLSearchParams(window.location.search);
  let navigate = useNavigate();
  const { getClientProducts } = useContext(ClientContext);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState("");

  const filter = (key, value) => {
    search.set(key, value);
    const newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
    setValue(search.get("q"));
    getClientProducts();
  };

  const reset = () => {
    navigate("/");
    getClientProducts();
    setFrom("");
    setTo("");
    setValue("");
  };

  useEffect(() => {
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
    setValue(search.get("q"));
  }, []);

  return (
    <div className="filter-products">
      <div className="price-filter">
        <TextField
          onChange={(event) => filter("price_gte", event.target.value)}
          variant="standard"
          label="From"
          value={from}
        />
        <TextField
          onChange={(event) => filter("price_lte", event.target.value)}
          variant="standard"
          label="To"
          value={to}
        />
        <Button onClick={reset}>Reset</Button>
      </div>
      <div className="live-search">
        <TextField
          onChange={(event) => filter("q", event.target.value)}
          variant="outlined"
          label="Live Search"
          fullWidth
          value={value}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
