import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ClientContext } from "../context/ClientProvider";
import { Button, TableFooter } from "@mui/material";
import DeleteIcon from "../images/bin.png";

export default function BasicTable({ cart }) {
  const { changeCountCartProduct, deleteProductInCart } =
    React.useContext(ClientContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Count</TableCell>
            <TableCell align="center">SubPrice</TableCell>
            <TableCell align="center">#</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((row) => (
            <TableRow
              key={row.product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                <img height="100" src={row.product.image} alt="ng" />
              </TableCell>
              <TableCell align="center">{row.product.name}</TableCell>
              <TableCell>
                <input
                  width="40px"
                  onChange={(event) => {
                    if (event.target.value < 0) {
                      return;
                    }
                    changeCountCartProduct(event.target.value, row.product.id);
                  }}
                  type="number"
                  value={row.count}
                  min="1"
                />
              </TableCell>
              <TableCell align="center">{row.subPrice} сом</TableCell>
              <TableCell align="center">
                <Button onClick={() => deleteProductInCart(row.product.id)}>
                  <img src={DeleteIcon} alt="bin" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell align="left">Total Price:</TableCell>
            <TableCell align="right">{cart.totalPrice} сом</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
