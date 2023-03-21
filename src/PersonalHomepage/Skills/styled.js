import styled from "styled-components";
import { SubHeader } from "../SubHeader/styled";

export const Wrapper = styled.section`
    margin: auto;
    margin-top: 72px;
    background: ${({ theme }) => theme.color.sectionBackground};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow}, 0px 16px 58px ${({ theme }) => theme.color.shadow};
    border-radius: 4px;
    padding: 32px;
`;

export const SkillsTitle = styled(SubHeader)`
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.borderBottom};
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    list-style: none;
    gap: 8px;
    color: ${({ theme }) => theme.color.textSecondary};
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.05em;
`;

export const ListItems = styled.li`
    display: flex;
    align-items: center;
`;

export const SkillsPoints = styled.div`
    margin-right: 16px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.point};
`;