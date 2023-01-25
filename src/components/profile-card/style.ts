import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
    align-items: center;
    width: 20%;
    border-radius: 5px;
    min-height: 100px;
    max-height: 200px;
    min-width: 130px;
    cursor: pointer;
    transition: 0.5s;

    :hover {
      transform: scale(1.15);
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    h2 {
      color: ${theme.colors.textFour};
    }
  `}
`;