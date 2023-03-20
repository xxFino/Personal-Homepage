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
`;

export const StyledTile = styled.li`
    width: 592px;
    padding: 56px;    
    margin: 0;    
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow}, 0px 16px 58px ${({ theme }) => theme.color.shadow};
    border-radius: 4px;
    transition: 0.3s;
    &:hover{
        border: 6px solid ${({ theme }) => theme.color.borderHover};
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
`;

export const TileDescription = styled.p`
    line-height: 1.4;
    letter-spacing: 0.05em;
`;

export const LinksWrapper = styled.div`
    margin-top: 24px;
    margin-bottom: 0;
    padding-bottom: 8px;
    line-height: 1.4;
    display: grid;
    grid-template-columns: 4em 1fr;
    color: ${({ theme }) => theme.color.textSecondary};
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.tileLink};
`;