import styled from "styled-components";

export const UserStyled = styled.div`     
margin: auto;
text-align: center;
`;


export const Profile = styled.div`
padding-top: 30px;
        width: 200px;
        margin: auto;
        border: 1px solid #ccc;
`;

export const ProfileImage = styled.img`
        width: 100px;
        height: 100px;
        border-radius: 50%;
`;

export const ProfileName = styled.p`
margin-top: 10px;
    color: black;
    font-size: 18px;
    font-weight: 600;
`;

export const ProfileTag = styled.p`
margin-top: 5px;
    color: #777;
    font-size: 14px;
    font-weight: 600;
`;

export const ProfileLocation = styled.p`
margin-top: 5px;
    color: #777;
    font-size: 14px;
    font-weight: 600;
`;

export const StatsStyled = styled.ul`
width: 200px;
margin: auto;
MARgin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border: 1px solid #ccc;
`;

export const StatsItem = styled.li`
width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70px;
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