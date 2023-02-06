import { Root, Portal, Content, Group, Item } from '@radix-ui/react-dropdown-menu';
import { DropMenuTrigger } from './style';
export const DropMenuRoot = Root;
export const DropMenuContent = Content;
export const DropMenuGroup = Group;
export const DropMenuItem = Item;

type RadixDropdownMenuProps = {
  iconTrigger: React.ReactNode;
  children: React.ReactNode;
};
export function RadixDropdownMenu({ iconTrigger, children }: RadixDropdownMenuProps) {
  return (
    <Root>
      <DropMenuTrigger>{iconTrigger}</DropMenuTrigger>
      <Portal>{children}</Portal>
    </Root>
  );
}
