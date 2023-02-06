import { DropMenuContent, DropMenuGroup, DropMenuItem } from '../radix-dropdown';
import { MdManageAccounts } from 'react-icons/md';
import styled, { css } from 'styled-components';

export const SettingsIcon = styled(MdManageAccounts)`
  ${({ theme }) => css`
    height: 35px;
    width: 35px;
    color: ${theme.colors.c7};
  `}
`;

export const DropdownContent = styled(DropMenuContent)`
  ${({ theme }) => css`
    padding: 0.3rem;
    border-radius: 5px;
    background-color: ${theme.colors.c4};
    font-size: 1.2rem;
    @media screen and (width < 1025px) {
      font-size: 1rem;
    }
    @media screen and (width <= 700px) {
      font-size: 0.8rem;
    }
  `}
`;

export const DropdownGroup = styled(DropMenuGroup)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const DropdownMenuItem = styled(DropMenuItem)`
  ${({ theme }) => css`
    color: ${theme.colors.c3};
    :hover {
      cursor: pointer;
    }
  `}
`;
