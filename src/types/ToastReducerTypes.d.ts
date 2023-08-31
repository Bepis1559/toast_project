type action = {
  type:
    | "setPosition"
    | "setToastType"
    | "setAutoDismiss"
    | "setTimeout"
    | "setToastMessage";
  payload?: {
    value: ToastPosition | TypeOptions | boolean | number | string;
  };
};

type state = {
  position: ToastPosition;
  toastType: TypeOptions;
  autoDismiss: boolean;
  timeout: number;
  toastMessage: string;
};
