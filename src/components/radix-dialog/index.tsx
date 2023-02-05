import { Root, Portal } from '@radix-ui/react-dialog';
import { DialogContent, DialogOverlay } from './style';

type RadixDialogProps = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export function RadixDialog({ open, onOpenChange, children }: RadixDialogProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Portal>
        <DialogOverlay>
          <DialogContent>{children}</DialogContent>
        </DialogOverlay>
      </Portal>
    </Root>
  );
}
