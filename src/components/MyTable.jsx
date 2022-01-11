import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdminContext } from "../context/AdminProvider";
import { Button } from "@mui/material";
import BinIcon from "../images/bin.png";
import EditIcon from "../images/editing.png";

export default function BasicTable() {
  const { getProducts, deleteProduct, products } =
    React.useContext(AdminContext);

  React.useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">#</TableCell>
            <TableCell align="center">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img width="170" src={item.image} alt="productImage" />
              </TableCell>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.category}</TableCell>
              <TableCell align="center">{item.description}</TableCell>
              <TableCell align="center">
                <strong>{item.price}</strong>
              </TableCell>
              <TableCell align="center">
                <Button onClick={() => deleteProduct(item.id)}>
                  <img src={BinIcon} alt="bin" />
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button>
                  <img src={EditIcon} alt="edit" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
