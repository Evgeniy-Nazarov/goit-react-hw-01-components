import styled from "styled-components";

export const FriendList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    list-style: none;
    
`;

export const FriendListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    
    border: 1px solid #ccc;
    &:last-child {
        margin-bottom: 0;
    }
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const FriendAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 25%;
    margin-left: 20px;
    background-color: #ccc;
`;

export const FriendName = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: black;
    margin-left: 20px;
`;

export const FriendStatus = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.children ? "green" : "red"};
    margin-left: 10px;
`;
