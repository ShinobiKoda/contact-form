import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
    useEffect(()=>{
        const timer =  setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose])


  return (
    <div className="toast-container py-4 px-2 bg-[#2a4244] rounded-md w-full max-w-[300px] mx-auto flex flex-col gap-3 text-white absolute z-30 ">
      <div className="flex items-center gap-3">
        <FaCheckCircle className="text-2xl text-white"></FaCheckCircle>
        <p>{message}</p>
      </div>
      <p>Thanks for completing the form. We'll be in touch soon</p>
    </div>
  );
};

export default Toast;
