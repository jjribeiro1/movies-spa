import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog'

export const ProfilesSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.pageBg};
  `}
`;

export const ProfileList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 40%;
`;

export const NewProfile = styled(Dialog.Trigger)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    margin-top: 1.5rem;
    width: 10rem;
    height: 2.5rem;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.textOne};
    background-color: ${theme.colors.lightBg3};
    border-style: none;
    :hover {
      cursor: pointer;
    }
  `}
`;
