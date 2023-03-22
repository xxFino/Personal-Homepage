import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-self: flex-end;
    align-self: flex-start; 
    justify-content: flex-end;

    @media (max-width: 767px) {
      position: absolute;
      top: 21px;
      right: 17px;
   };
`;

export const ThemeButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const Text = styled.p`
    margin-right: 12px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;  
    color: ${({ theme }) => theme.color.textSecondary};

    @media (max-width: 767px) {
        display: none;
   };
`;

export const IconWrapper = styled.div`
    background: ${({ theme }) => theme.color.themeSwitchBackground};    
    width: 48px;
    border: 1px solid grey;
    display: flex;
    padding: 2px;
    border-radius: 10px;
`;

export const Toogle = styled.img`
    background: ${({ theme }) => theme.color.toggleBackground};
    padding: 2px;
    display: flex;
    border-radius: 50%;
    transition: transform 0.5s;
    height: 20px;
    width: 20px;

    ${({ moveRight }) => moveRight && css`
      transform: translateX(22px);
    `};
`;