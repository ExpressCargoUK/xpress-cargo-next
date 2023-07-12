import * as React from "react"

import TextField from "@mui/material/TextField"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

export default function FCDatePicker({ name, value, setValue }) {
  //   const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={name}
        value={value}
        inputFormat="DD/MM/YYYY"
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              border: "1px solid #fff",
              width: "100%",
              color: "white",
              background: "#fff",
            }}
            variant="filled"
            InputLabelProps={{
              sx: { color: "#1c252e" },
            }}
          />
        )}
      />
    </LocalizationProvider>
  )
}
