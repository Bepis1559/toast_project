import Button from "@mui/material/Button";
import { type ReactElement } from "react";

export function CreateToastBtn(): ReactElement {
  return (
    <>
      <Button type="submit" variant="contained">
        Create toast
      </Button>
    </>
  );
}
