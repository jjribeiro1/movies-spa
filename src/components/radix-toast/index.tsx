import { Provider } from '@radix-ui/react-toast';
import {
  ToastClose,
  ToastDescription,
  ToastHeader,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './style';

type ToastMessageProps = {
  openToast: boolean;
  setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  typeMessages?: string;
  messages: string[];
};

export function ToastMessage({
  openToast,
  setOpenToast,
  title,
  typeMessages,
  messages,
}: ToastMessageProps) {
  return (
    <Provider duration={5000}>
      <ToastRoot
        open={openToast}
        onOpenChange={setOpenToast}
        defaultOpen={false}
        typeMessage={typeMessages}
      >
        <ToastHeader>
          <ToastTitle>{title}</ToastTitle>
          <ToastClose>X</ToastClose>
        </ToastHeader>

        <ToastDescription>
          {messages.map((message, i) => (
            <p key={i}>{message}</p>
          ))}
        </ToastDescription>
      </ToastRoot>

      <ToastViewport />
    </Provider>
  );
}
