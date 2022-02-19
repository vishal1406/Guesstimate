import { Toaster } from 'react-hot-toast';

const Toast = ({ position, duration }) => {
    return (
        <Toaster
            position={position || "bottom-left"}
            duration={duration || 2000} />
    )
}

export default Toast