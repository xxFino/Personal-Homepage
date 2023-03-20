import styled from "styled-components";

export const Wrapper = styled.div`    
    display: grid;  
    grid-template-columns: auto auto auto;    
    grid-gap: 66px;  
    margin-top: 115px;  
`;

export const Photo = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;   
`;

export const Informations = styled.div`
    margin-top: 43px;
`;

export const ThisIs = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.textSecondary};
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    line-height: 46px;
    margin-top: 12px;
    margin-bottom: 0px;
    width: auto;
`;

export const Description = styled.p`
    width: 633px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    margin-top: 35px;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.color.textSecondary};
`;

export const EmailLink = styled.a`
    text-decoration: none;    
    gap: 16px;
    display: flex;    
    justify-content: center;
    align-items: center;
    width: 154px;
    border-radius: 4px;
    height: 49px;
    background: ${({ theme }) => theme.color.buttonLink}; 
    color: ${({ theme }) => theme.color.white};
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.05em;
`;

export const Envelope = styled.img`
    height: 25px;
`;
