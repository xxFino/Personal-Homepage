import styled from "styled-components";

export const Wrapper = styled.div`   
    display: grid;  
    grid-template-columns: auto;  
    margin-top: 120px;
    margin-bottom: 108px;
`;

export const LetsTalk = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.textSecondary};
`;

export const EmailText = styled.a`
    text-decoration: none;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    color: black;
    transition: 0.5s;

    &:hover {
    color: ${({ theme }) => theme.color.iconHover};
   }
`;

export const Description = styled.p`
    width: 670px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.05em;
`;

export const IconsContainter = styled.div`
    margin: 0;
    display: flex;
    gap: 24px;
`;

export const Icon = styled.img`
    width: 48px;
    height: 48px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    transition: 0.3s;
    
    &:hover {
    color: ${({ theme }) => theme.color.iconHover};
   }
`;
