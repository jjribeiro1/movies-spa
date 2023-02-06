import styled, { css } from "styled-components";
import { Trigger } from "@radix-ui/react-dropdown-menu";


export const DropMenuTrigger = styled(Trigger)`
  ${({ theme }) => css`
    background-color: ${theme.colors.pageBg};
    border-style: none;
    :hover {
      cursor: pointer;
    }
  `}
`;