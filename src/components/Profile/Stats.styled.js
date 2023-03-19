import styled from "styled-components";

export const StatsStyled = styled.ul`
width: 200px;
margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
     border: 1px solid #ccc;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    border-right: 1px solid #ccc;
    &:last-child {
        border-right: none;
    }   
`;

export const Label = styled.span`
    display: block;
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 600;
    color: #777;
`;

export const Quantity = styled.span`
    font-size: 18px;
    font-weight: 700;
`;