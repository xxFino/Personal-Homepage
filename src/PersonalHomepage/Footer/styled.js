import styled from "styled-components";

export const Wrapper = styled.div`   
    display: grid;  
    grid-template-columns: auto;  
    margin-top: 120px;
    margin-bottom: 108px;

    @media (max-width: 767px) {
        margin-top: 48px; 
        margin-left: 16px;
    }
`;

export const LetsTalk = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.textSecondary};
    margin-bottom: 0;
`;

export const EmailText = styled.a`
    margin-top: 24px;
    text-decoration: none;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    transition: 0.5s;
    color: ${({ theme }) => theme.color.emailText};

    &:hover {
    color: ${({ theme }) => theme.color.emailHover};
   }

   @media (max-width: 767px) {
        font-size: 15px;
        line-height: 22px;
    }
`;

export const Description = styled.p`
    margin-top: 24px;
    margin-bottom: 0;
    width: 670px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.05em;

    @media (max-width: 767px) {
        width: 288px;
        font-size: 14px;
        line-height: 17px;
    }
`;

export const IconsContainter = styled.div`
    margin-top: 56px;
    display: flex;
    gap: 24px;

    @media (max-width: 767px) {
        display: flex;
        gap: 16px;
    }
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.icon};
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        svg path{
            color: ${({ theme }) => theme.color.iconHover};
        }
   }
`;
