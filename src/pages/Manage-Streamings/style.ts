import styled, { css } from 'styled-components';

export const ManageSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;
    height: 100%;
    background-color: ${theme.colors.pageBg};
    font-size: 1rem;
  `}
`;

export const CreateStreamingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem;
  gap: 10px;

  @media screen and (width < 1025px) {
    padding: 3rem;
  }

  @media screen and (width < 601px) {
    display: grid;
    grid-template-columns: 200px 100px 100px;
    gap: 10px;
    padding: 1.5rem;
  }

  @media screen and (width < 501px) {
    grid-template-columns: 180px 80px 80px;
    padding: 1rem;
  }
`;

export const InputControls = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;

    @media screen and (width < 1025px) {
      font-size: 1rem;
    }

    @media screen and (width <= 600px) {
      font-size: 0.8rem;
    }

    label {
      font-weight: 600;
      color: ${theme.colors.c4};
    }

    input {
      padding: 0rem 0.1rem;
      border-radius: 5px;
      background-color: ${theme.colors.inputBg};
    }
  `}
`;

export const CreateStreamingButton = styled.button`
  ${({ theme }) => css`
    align-self: flex-end;
    padding: 0.1rem 1rem;
    border-radius: 5px;
    border: 0;
    font-size: 1rem;
    font-weight: 400;
    color: ${theme.colors.c3};
    background-color: ${theme.colors.btnOne};
    cursor: pointer;

    @media screen and (width < 1025px) {
      border-radius: 3px;
      font-size: 0.8rem;
    }

    @media screen and (width < 769px) {
      border-radius: 3px;
      font-size: 0.7rem;
    }
  `}
`;

export const StreamingListTitle = styled.h2`
  ${({ theme }) => css`
    width: 100%;
    padding: 2rem;
    font-size: 2.5rem;
    color: ${theme.colors.c7};

    @media screen and (width < 1025px) {
      padding: 1rem;
    }

    @media screen and (width < 769px) {
      font-size: 1.5rem;
    }
  `}
`;

export const StreamingList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 10px;
  width: 100%;
  height: 100%;

  @media screen and (width < 1025px) {
    padding: 1rem;
  }
`;

export const StreamingItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: fit-content;
    width: 100%;
    text-transform: capitalize;

    :nth-child(odd) {
      background-color: ${theme.colors.c8};
    }

    span {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${theme.colors.c5};

      @media screen and (width < 769px) {
        font-size: 1rem;
      }
    }
  `}
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 15px;
  font-size: 1.3rem;
  font-weight: 500;

  @media screen and (width < 1025px) {
    font-size: 1rem;
  }

  @media screen and (width < 769px) {
    font-size: 0.8rem;
  }
`;

export const EditButton = styled.button`
  ${({ theme }) => css`
    padding: 2px 5px;
    color: ${theme.colors.c8};
    background-color: ${theme.colors.c5};
    border-radius: 5px;
    border: 0;
    cursor: pointer;
  `}
`;

export const DeleteButton = styled.button`
  ${({ theme }) => css`
    padding: 0.1rem 0.2rem;
    color: ${theme.colors.c1};
    background-color: ${theme.colors.toastFail};
    border-radius: 5px;
    border: 0;
    cursor: pointer;
  `}
`;
