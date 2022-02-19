import toast from 'react-hot-toast';

export const notifySuccessMessage = (message) => toast.success(message);

export const notifyErrorMessage = (message) => toast.error(message);