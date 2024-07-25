import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastService = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  info: (msg: string) => toast.info(msg),
  warning: (msg: string) => toast.warning(msg),
};
