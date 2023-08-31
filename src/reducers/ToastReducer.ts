import type { ToastPosition, TypeOptions } from "react-toastify";

export function ToastReducer(state: state, { type, payload }: action): state {
  const { value } = payload ?? {};
  switch (type) {
    case "setPosition":
      return { ...state, position: value as ToastPosition };
    case "setToastType":
      return { ...state, toastType: value as TypeOptions };
    case "setAutoDismiss":
      return { ...state, autoDismiss: value as boolean };
    case "setTimeout":
      return { ...state, timeout: value as number };
    case "setToastMessage":
      return { ...state, toastMessage: value as string };
    default:
      throw new Error("Something went wrong with the ToastReducer ");
  }
}
