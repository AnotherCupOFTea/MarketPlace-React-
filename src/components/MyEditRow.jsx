import { Button, TableCell, TableRow } from "@mui/material";
import React from "react";
import { AdminContext } from "../context/AdminProvider";
import BinIcon from "../images/bin.png";
import SaveIcon from "../images/diskette.png";
import SelectTextField from "./SelectTextfield";

const MyEditRow = ({ editProduct, setEditProduct }) => {
  const [product, setProduct] = React.useState(editProduct);
  const { saveEditedProduct } = React.useContext(AdminContext);

  const handleEditChange = (event) => {
    let object = {
      ...product,
      [event.target.name]: event.target.value,
    };
    setProduct(object);
  };

  const handleClick = (event) => {
    saveEditedProduct(product);
    setEditProduct(null);
  };

  return (
    <TableRow
      key={editProduct.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <input
          onChange={handleEditChange}
          type="text"
          name="image"
          value={product.image}
        />
      </TableCell>
      <TableCell align="center">
        <input
          onChange={handleEditChange}
          type="text"
          name="name"
          value={product.name}
        />
      </TableCell>
      <TableCell align="center">
        <input
          disabled="true"
          onChange={handleEditChange}
          type="text"
          name="name"
          value={product.category}
        />
      </TableCell>
      <TableCell align="center">
        <input
          onChange={handleEditChange}
          type="text"
          name="description"
          value={product.description}
        />
      </TableCell>
      <TableCell align="center">
        <input
          onChange={handleEditChange}
          type="text"
          name="price"
          value={product.price}
        />
      </TableCell>
      <TableCell align="center">
        <Button disabled>
          <img src={BinIcon} alt="bin" />
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button onClick={handleClick}>
          <img src={SaveIcon} alt="save" />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default MyEditRow;
