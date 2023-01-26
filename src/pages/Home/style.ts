import styled, { css } from 'styled-components';
export const HomeMain = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.pageBg};
  `}
  color: white;
`;
