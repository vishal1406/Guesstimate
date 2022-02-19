import toast from 'react-hot-toast';

export const notifySuccessMessage = (message) => toast.success(message);

export const notifyErrorMessage = (message) => toast.error(message);

export const generateRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}