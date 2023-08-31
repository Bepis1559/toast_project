import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ReactElement, Dispatch, useRef } from "react";
import { PositionComponentTheme } from "../MUI_themes/Position";
import { type ToastPosition } from "react-toastify";
import { ThemeProvider } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

type props = {
  position: string;
  dispatch: Dispatch<action>;
};

export function Position({ position, dispatch }: props): ReactElement {
  const handleChange = (e: SelectChangeEvent) =>
    dispatch({
      type: "setPosition",
      payload: { value: e.target.value as ToastPosition },
    });

  const menuItems = useRef<ToastPosition[]>([
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ]);
  const menuItemsKeys = useRef(
    menuItems.current.map(() => crypto.randomUUID()),
  );

  return (
    <Box sx={{ minWidth: 120 }}>
      <ThemeProvider theme={PositionComponentTheme}>
        <FormControl
          sx={{
            color: "white",
          }}
          fullWidth>
          <InputLabel sx={{ color: "white" }} id="position-label">
            Position
          </InputLabel>
          <Select
            required
            sx={{ color: "white" }}
            labelId="position-label"
            id="position"
            value={position}
            label="position"
            onChange={handleChange}>
            {menuItems.current.map((item, index) => (
              <MenuItem key={menuItemsKeys.current[index]} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </Box>
  );
}
