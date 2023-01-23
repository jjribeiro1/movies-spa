import * as Toast from '@radix-ui/react-toast';
import { ToastClose, ToastDescription, ToastRoot, ToastTitle, ToastViewport } from './style';

type ToastMessageProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  messages: string[];
};

export function ToastMessage({ open, setOpen, title, messages }: ToastMessageProps) {
  return (
    <Toast.Provider duration={5000}>
      <ToastRoot open={open} onOpenChange={setOpen} defaultOpen={false}>
        <ToastTitle>{title}</ToastTitle>
        <ToastClose>X</ToastClose>
        <ToastDescription>
          {messages.map((message) => (
            <p>{message}</p>
          ))}
        </ToastDescription>
      </ToastRoot>

      <ToastViewport />
    </Toast.Provider>
  );
}
