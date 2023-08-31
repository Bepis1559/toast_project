import { type TypeOptions, toast } from "react-toastify";

function handlePositionString(position: string) {
  position = position.replace("-", "_");
  position = position.toUpperCase();
  return position;
}

export function createToast(
  position: string,
  autoDismiss: boolean,
  timeout: number,
  message: string,
  toastType: TypeOptions,
) {
  const toastPositon = handlePositionString(position);
  // @ts-expect-error : default does not exist anymore on toast type
  toast[toastType](message, {
    position: toast.POSITION[toastPositon as keyof typeof toast.POSITION],
    autoClose: autoDismiss ? timeout : false,
  });
}
