import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import type { ChangeEvent, Dispatch, ReactElement } from "react";

type props = {
  autoDismiss: boolean;
  dispatch: Dispatch<action>;
};

export function AutoDismiss({ autoDismiss, dispatch }: props): ReactElement {
  const handleAutoDismissChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: "setAutoDismiss",
      payload: { value: e.target.checked },
    });

  return (
    <FormGroup>
      <FormControlLabel
        className="autoDismissFormGroupLabel"
        control={
          <Switch checked={autoDismiss} onChange={handleAutoDismissChange} />
        }
        label="AutoDismiss"
      />
    </FormGroup>
  );
}
