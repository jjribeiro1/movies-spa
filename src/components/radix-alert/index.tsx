import React from 'react';
import * as Alert from '@radix-ui/react-alert-dialog';
import { AlertContent, AlertOverlay } from './styles';

type RadixAlertProps = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export function RadixAlert({ open, onOpenChange, children }: RadixAlertProps) {
  return (
    <Alert.Root open={open} onOpenChange={onOpenChange}>
      <Alert.Portal>
        <AlertOverlay>
          <AlertContent>{children}</AlertContent>
        </AlertOverlay>
      </Alert.Portal>
    </Alert.Root>
  );
}
