import styled, { css } from 'styled-components';

export const ManageSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.pageBg};
  `}
`;

export const CreateStreamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;
  margin-bottom: 3rem;
  align-items: center;
  width: 300px;
  height: 40px;
  gap: 10px;
`;

export const InputControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.3rem;
      font-weight: 600;
      color: ${theme.colors.textFour};
    }

    input {
      padding: 0.6rem;
      height: 1.8rem;
      font-size: 1.2rem;
      border-radius: 5px;
      background-color: ${theme.colors.inputBg};
    }
  `}
`;

export const CreateStreamingButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    width: 5.8rem;
    height: 1.5rem;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.textThree};
    background-color: ${theme.colors.btnOne};
    border-style: none;
    :hover {
      cursor: pointer;
    }
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-top: 5rem;
    margin-left: 2rem;
    font-size: 1.3rem;
    color: ${theme.colors.textOne};
  `}
`;

export const StreamingList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  gap: 5px;
  width: 50%;
  height: 100%;
`;

export const StreamingItem = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.textOne};
  `}
`;
