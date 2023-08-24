import { showAlertMessage } from "../features/generalSlice/alertSlice";

const errorMiddleware = (store) => (next) => (action) => {
  const { dispatch } = store;
  if (action.type.endsWith("rejected")) {
    dispatch(
      showAlertMessage({
        open: true,
        message: action.payload.error,
        severity: "error",
      })
    );
  }
  return next(action);
};

export default errorMiddleware;
