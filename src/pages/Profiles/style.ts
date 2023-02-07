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

export const ProfileActions = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 10px;
`;

type ProfileActionsButtonProps = {
  disabled: boolean;
};

export const NewProfile = styled.button<ProfileActionsButtonProps>`
  ${({ theme }) => css`
    padding: 0.5rem 2rem;
    margin-top: 3rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.c1};
    background-color: ${theme.colors.lightBg3};
    border-style: none;
    :hover {
      cursor: pointer;
    }

    @media screen and (width <= 800px) {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }

    @media screen and (width <= 600px) {
      padding: 0.3rem 0.8rem;
      font-size: 0.6rem;
    }
  `};
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

export const ConfigProfiles = styled.button<ProfileActionsButtonProps>`
  ${({ theme }) => css`
    padding: 0.5rem 2rem;
    margin-top: 3rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.c1};
    background-color: ${theme.colors.lightBg3};
    border-style: none;
    :hover {
      cursor: pointer;
    }

    @media screen and (width <= 800px) {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }

    @media screen and (width <= 600px) {
      padding: 0.3rem 0.8rem;
      font-size: 0.6rem;
    }
  `}
  display: ${(props) => (props.disabled ? 'none' : 'block')};
`;
