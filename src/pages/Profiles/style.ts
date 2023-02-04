import styled, { css } from 'styled-components';

export const ProfilesSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
    background-color: ${theme.colors.pageBg};
  `}
`;

export const ProfileList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 5rem;
  gap: 15px;
  width: 100%;
  list-style: none;

  @media screen and (width < 801px) {
    padding: 1.5rem 2.5rem;
  }
`;

export const NewProfile = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    margin-top: 4.5rem;
    width: 10rem;
    height: 2.5rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.c1};
    background-color: ${theme.colors.lightBg3};
    border-style: none;
    :hover {
      cursor: pointer;
    }
  `}
`;
