import * as Dialog from '@radix-ui/react-dialog';
import { DialogContent, DialogOverlay } from './style';

type RadixDialogProps = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export function RadixDialog({ open, onOpenChange, children }: RadixDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>{children}</DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
