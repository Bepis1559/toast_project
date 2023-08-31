import { ThemeProvider } from "@emotion/react";
import TextField from "@mui/material/TextField";
import type { ChangeEvent, Dispatch, ReactElement } from "react";
import { AutoDismissTimeoutComponentTheme } from "../MUI_themes/AutoDismissTimeout";

type props = {
  toastMessage: string;
  dispatch: Dispatch<action>;
};

export function ToastMessage({ toastMessage, dispatch }: props): ReactElement {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch({
      type: "setToastMessage",
      payload: { value: e.target.value },
    });
  };

  return (
    <ThemeProvider theme={AutoDismissTimeoutComponentTheme}>
      <TextField
        required
        InputLabelProps={{
          sx: {
            color: "white", // Change label color to white
          },
        }}
        value={toastMessage}
        onChange={handleChange}
        id="toast-message"
        label="Toast message"
        variant="outlined"
      />
    </ThemeProvider>
  );
}
