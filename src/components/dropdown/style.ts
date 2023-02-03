import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MdManageAccounts } from 'react-icons/md';
import styled, { css } from 'styled-components';

export const Trigger = styled(DropdownMenu.Trigger)`
  ${({ theme }) => css`
    background-color: ${theme.colors.pageBg};
    border: none;
    :hover {
      cursor: pointer;
    }
  `}
`;

export const SettingsIcon = styled(MdManageAccounts)`
  ${({ theme }) => css`
    height: 35px;
    width: 35px;
    color: ${theme.colors.c7};
  `}
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  ${({ theme }) => css`
    margin-top: 0.5rem;
    margin-right: 1rem;
    padding: 0.3rem;
    width: 160px;
    height: 150px;
    border-radius: 5px;
    background-color: ${theme.colors.c4};

    @media (min-width: 500px) {
      width: 210px;
      height: 180px;
      font-size: 1.3rem;
    }
  `}
`;

export const DropdownGroup = styled(DropdownMenu.DropdownMenuGroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const DropdownMenuItem = styled(DropdownMenu.DropdownMenuItem)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.c3};
    :hover {
      cursor: pointer;
    }
    @media (min-width: 500px) {
      font-size: 1.3rem;
    }
  `}
`;
