import { Toaster, ToasterProps } from "react-hot-toast";

interface ToastProps {
  position?: ToasterProps["position"];
  duration?: number;
}

const Toast = ({ position = "bottom-left", duration = 2000 }: ToastProps) => {
  return <Toaster position={position} toastOptions={{ duration }} />;
};

export default Toast;
