import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 96px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 767px) {
        margin-left: 16px;
        margin-right: 16px;
    }
`;

export const Info = styled.h3`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;

    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

export const Paragraph = styled.p`
   font-weight: 400;
    font-size: 20px;
    line-height: 1.4; 
    letter-spacing: 0.05em;
    width: 420px;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 19px;
        width: auto;
    }
`;

export const GithubLink = styled.a`
    text-decoration: none;    
    gap: 16px;
    display: flex;    
    justify-content: center;
    align-items: center;
    width: 154px;
    border-radius: 4px;
    height: 49px;
    background: ${({ theme }) => theme.color.buttonLink}; 
    color: ${({ theme }) => theme.color.buttonText};
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.05em;
`;