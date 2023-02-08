import { Root, Portal, Anchor, Content } from '@radix-ui/react-popover';

type RadixPopoverProps = {
  openPopover: boolean;
  setOpenPopover: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};
export function RadixPopover({ openPopover, setOpenPopover, children }: RadixPopoverProps) {
  return (
    <Root open={openPopover} onOpenChange={setOpenPopover}>
      <Portal>
        <Content asChild>{children}</Content>
      </Portal>
    </Root>
  );
}
