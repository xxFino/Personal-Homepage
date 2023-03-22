import styled from "styled-components";

export const List = styled.ul`
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    gap: 32px; 
    list-style: none;
    padding: 0;
    max-width: 1216px;

    @media (max-width: 767px) {
        margin: 24px 16px 0 16px;
        gap: 16px
    }
`;

export const StyledTile = styled.li`
    width: 592px;
    padding: 56px;    
    margin: 0;   
    border: 6px solid ${({ theme }) => theme.color.border}; 
    background: ${({ theme }) => theme.color.sectionBackground};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow}, 0px 16px 58px ${({ theme }) => theme.color.shadow};
    border-radius: 4px;
    transition: 0.3s;
    &:hover{
        border: 6px solid ${({ theme }) => theme.color.borderHover};
    }

    @media (max-width: 767px) {
        width: 288px;
        padding: 24px;    
    }
`;

export const Container = styled.div`
    font-weight: 400;
    font-size: 18px;
    
`;

export const TileTitle = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.tileTitle};

    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

export const TileDescription = styled.p`
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.textSecondary};

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export const LinksWrapper = styled.div`
    margin-top: 24px;
    margin-bottom: 0;
    padding-bottom: 8px;
    line-height: 1.4;
    display: grid;
    grid-template-columns: 4em 1fr;
    word-break: break-all;
    color: ${({ theme }) => theme.color.textSecondary};

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.tileLink};
`;