import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
  0% {
      transform: rotate(0deg);
    }
  100% {
      transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 88px;
`;

export const Info = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    margin-bottom: 48px;
`;

export const IconSpinner = styled(Spinner)`
    animation: ${rotate} 1.5s linear infinite;
    color: ${({ theme }) => theme.color.iconHover};
`;