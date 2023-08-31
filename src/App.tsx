import { type ReactElement, type FormEvent, useReducer } from "react";
import "./styles/app.css";
import "react-toastify/dist/ReactToastify.css";
import { Position } from "./components/Position";
import { AutoDismiss } from "./components/AutoDismiss";
import { AutoDismissTimeout } from "./components/AutoDismissTimeout";
import { ToastContainer } from "react-toastify";
import { createToast } from "./helpers/createToast";
import Box from "@mui/material/Box";
import { CreateToastBtn } from "./components/CreateToastBtn";
import { Toasts } from "./components/Toasts";
import { ToastMessage } from "./components/ToastMessage";
import { ToastReducer } from "./reducers/ToastReducer";
import { ToastType } from "./components/ToastType";

function App(): ReactElement {
  const initialState: state = {
    position: "top-right",
    toastType: "success",
    autoDismiss: false,
    timeout: 5000,
    toastMessage: "",
  };
  const [state, dispatch] = useReducer(ToastReducer, initialState);
  const { position, toastType, autoDismiss, timeout, toastMessage } = state;
  const resetToastMessage = () =>
    dispatch({
      type: "setToastMessage",
      payload: { value: "" },
    });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetToastMessage();
    createToast(position, autoDismiss, timeout, toastMessage, toastType);
  };

  return (
    <main className="container">
      <ToastContainer />
      <h1>Create a toast</h1>
      <Box className="toastForm" component="form" onSubmit={handleSubmit}>
        <Position position={position} dispatch={dispatch} />
        <ToastType toastType={toastType} dispatch={dispatch} />
        <ToastMessage toastMessage={toastMessage} dispatch={dispatch} />
        <AutoDismiss autoDismiss={autoDismiss} dispatch={dispatch} />
        <AutoDismissTimeout
          timeout={timeout}
          dispatch={dispatch}
          autoDismiss={autoDismiss}
        />

        <CreateToastBtn />
        <Toasts />
      </Box>
    </main>
  );
}

export default App;
