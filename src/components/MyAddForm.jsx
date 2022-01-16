import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { AdminContext } from "../context/AdminProvider";
import SelectTextField from "./SelectTextfield";

const MyAddForm = () => {
  const { addProduct } = React.useContext(AdminContext);

  const [newProduct, setNewProduct] = React.useState({
    name: "",
    description: "",
    category: "Pizza",
    price: "",
    image: "",
  });

  const handleInput = (event) => {
    let object = {
      ...newProduct,
      [event.target.name]: event.target.value,
    };

    setNewProduct(object);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in newProduct) {
      if (!newProduct[key].trim()) {
        alert("Fill all the fields!");
        return;
      }
    }

    addProduct(newProduct);

    setNewProduct({
      name: "",
      description: "",
      category: "Pizza",
      price: "",
      image: "",
    });
  };

  return (
    <div>
      <Container maxWidth="xs">
        <div className="form-add_title">
          <h2>Add product</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleInput}
            fullWidth
            name="name"
            label="Name"
            variant="standard"
            value={newProduct.name}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="description"
            label="Desription"
            variant="standard"
            value={newProduct.description}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="price"
            label="Price"
            variant="standard"
            type="number"
            value={newProduct.price}
          />
          <TextField
            onChange={handleInput}
            fullWidth
            name="image"
            label="Image"
            variant="standard"
            value={newProduct.image}
          />
          <SelectTextField handleInput={handleInput} />
          <Button
            onClick={handleSubmit}
            className="form-add_button"
            variant="outlined"
            fullWidth
            color="primary"
            sx={{ mt: 2 }}
          >
            Send
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default MyAddForm;
