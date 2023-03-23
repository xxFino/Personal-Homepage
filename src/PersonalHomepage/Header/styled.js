import styled from "styled-components";

export const Wrapper = styled.div` 
    max-width: 1216px;
    display: grid;  
    grid-template-columns: auto auto auto;      
    margin-top: 115px;

    @media (max-width: 767px) { 
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        margin-left: 16px;
        grid-gap: 0;
    }
`;

export const Photo = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;   
    
    @media (max-width: 767px) {
        width: 132px;
        height: 132px;
        margin-bottom: 13px;
    }
`;

export const Informations = styled.div`
    display: grid;
    align-self: center;
    margin-left: 66px;

    @media (max-width: 767px) {
        margin-left: 16px;
    }
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
    color: ${({ theme }) => theme.color.headers};

    @media (max-width: 767px) {
        margin-top: 8px;
        font-size: 22px;
        line-height: 27px;
    }
`;

export const Description = styled.p`
    display: grid;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    margin-top: 35px;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.color.textSecondary};

    @media (max-width: 767px) {
        margin-top: 16px;
        margin-bottom: 24px;
        margin-right: 29px;
    }
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
    color: ${({ theme }) => theme.color.buttonText};
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0.05em;

    &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.textSecondary};
   }
`;

export const Envelope = styled.img`
    height: 25px;
`;
