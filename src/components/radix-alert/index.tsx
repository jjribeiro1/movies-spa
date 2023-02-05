import React from 'react';
import { Root, Portal } from '@radix-ui/react-alert-dialog';
import { AlertContent, AlertOverlay } from './styles';

type RadixAlertProps = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export function RadixAlert({ open, onOpenChange, children }: RadixAlertProps) {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Portal>
        <AlertOverlay>
          <AlertContent>{children}</AlertContent>
        </AlertOverlay>
      </Portal>
    </Root>
  );
}
