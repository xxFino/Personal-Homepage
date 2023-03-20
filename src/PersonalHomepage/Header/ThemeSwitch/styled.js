import styled from "styled-components";

export const ThemeButton = styled.button`
    border: none;
    background: black;
    display: flex;
    justify-self: center;
    width: 48px;
    height: 25px;
`;

export const Text = styled.p`
    margin: 0;
    font-size: 12px;
    font-weight: bold;    
    color: ${({ theme }) => theme.color.textSecondary};
`;