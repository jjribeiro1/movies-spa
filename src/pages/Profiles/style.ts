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
  align-items: center;
  gap: 20px;
  padding: 3rem 4rem;
  height: fit-content;
  width: 100%;
  list-style: none;

  @media screen and (width < 801px) {
    padding: 1.5rem 2.5rem;
  }
`;

export const ProfileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1rem;
  margin: 3rem auto;
  width: fit-content;
`;

type ProfileActionsButtonProps = {
  disabled: boolean;
  isEditingProfile?: boolean;
};

export const NewProfile = styled.button<ProfileActionsButtonProps>`
  ${({ theme }) => css`
    width: 10rem;
    height: 3rem;
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
      width: 8rem;
      height: 2.5rem;
    }

    @media screen and (width <= 600px) {
      width: 7rem;
      height: 2rem;
      font-size: 0.8rem;
    }
  `};
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

export const ConfigProfiles = styled.button<ProfileActionsButtonProps>`
  ${({ theme }) => css`
    width: 10rem;
    height: 3rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.c1};
    background-color: ${theme.colors.lightBg3};
    border-color: ${theme.colors.c1};
    :hover {
      cursor: pointer;
    }

    @media screen and (width <= 800px) {
      width: 8rem;
      height: 2.5rem;
    }

    @media screen and (width <= 600px) {
      width: 7rem;
      height: 2rem;
      font-size: 0.8rem;
    }
  `}
  border-style: ${(props) => (props.isEditingProfile ? 'solid' : 'none')};
  display: ${(props) => (props.disabled ? 'none' : 'block')};
`;
