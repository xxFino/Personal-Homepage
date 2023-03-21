import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 72px;
`;

export const Header = styled.header`
    text-align: center;
`;

export const Icon = styled.img`
    margin-bottom: 13px;
    color: ${({ theme }) => theme.color.textSecondary};

    &:hover{
        fill: ${({ theme }) => theme.color.textSecondary};
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const LastProjects = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    margin-top: 8px;
    margin-bottom: 0;
`;