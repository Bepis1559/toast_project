import { Button, TextField, ThemeProvider } from "@mui/material";
import type { ChangeEvent, Dispatch, ReactElement } from "react";
import { AutoDismissTimeoutComponentTheme } from "../MUI_themes/AutoDismissTimeout";

type props = {
  timeout: number;
  dispatch: Dispatch<action>;
  autoDismiss: boolean;
};

export function AutoDismissTimeout({
  timeout,
  dispatch,
  autoDismiss,
}: props): ReactElement {
  const handleNumberChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch({
      type: "setTimeout",
      payload: { value: parseFloat(e.target.value) },
    });
  };
  const handleReset = () =>
    dispatch({
      type: "setTimeout",
      payload: { value: 0 },
    });

  return (
    <div className="autoDismissTimeout">
      <ThemeProvider theme={AutoDismissTimeoutComponentTheme}>
        <TextField
          disabled={!autoDismiss}
          type="number"
          label="Set timeout in ms"
          value={Number(timeout).toString()}
          onChange={handleNumberChange}
          variant="outlined"
          InputLabelProps={{
            sx: {
              color: "white", // Change label color to white
            },
            shrink: true,
          }}
        />
        <Button
          disabled={!autoDismiss}
          variant="outlined"
          onClick={handleReset}>
          Reset
        </Button>
      </ThemeProvider>
    </div>
  );
}
