import styled from "styled-components";

export const StatsStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
     border: 1px solid #ccc;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-right: 1px solid #ccc;
    &:last-child {
        border-right: none;
    }   
`;

export const Label = styled.span`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
    color: #777;
`;

export const Quantity = styled.span`
    font-size: 18px;
    font-weight: 700;
`;