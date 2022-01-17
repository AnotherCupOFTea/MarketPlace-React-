import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "Pizza",
    label: "Pizza",
  },
  {
    value: "Snacks",
    label: "Snacks",
  },
  {
    value: "Dessert",
    label: "Dessert",
  },
  {
    value: "Drinks",
    label: "Drinks",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export default function SelectTextFields({ handleInput, id }) {
  const [currency, setCurrency] = React.useState("Pizza");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  if (id === "add") {
    return (
      <TextField
        id="outlined-select-currency"
        name="category"
        fullWidth
        select
        label="Select"
        sx={{ mt: 2 }}
        value={currency}
        onChange={(event) => {
          handleChange(event);
          handleInput(event);
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  } else if (id === "change") {
  }
}
