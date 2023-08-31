import { ThemeProvider } from "@emotion/react";
import { useRef, type ReactElement, type Dispatch } from "react";
import { type TypeOptions } from "react-toastify";
import { PositionComponentTheme } from "../MUI_themes/Position";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

type props = {
  toastType: TypeOptions;
  dispatch: Dispatch<action>;
};

export function ToastType({ toastType, dispatch }: props): ReactElement {
  const menuItems = useRef<TypeOptions[]>([
    "success",
    "error",
    "warning",
    "info",
  ]);
  const menuItemsKeys = useRef(
    menuItems.current.map(() => crypto.randomUUID()),
  );

  const handleChange = (e: SelectChangeEvent) =>
    dispatch({
      type: "setToastType",
      payload: { value: e.target.value as TypeOptions },
    });
  return (
    <Box sx={{ minWidth: 120 }}>
      <ThemeProvider theme={PositionComponentTheme}>
        <FormControl
          sx={{
            color: "white",
          }}
          fullWidth>
          <InputLabel sx={{ color: "white" }} id="toastType-label">
            Toast type
          </InputLabel>
          <Select
            required
            sx={{ color: "white" }}
            labelId="toastType-label"
            id="toastType"
            value={toastType}
            label="toastType"
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
