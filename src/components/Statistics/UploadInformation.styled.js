import styled from "styled-components";

function randomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

export const UploadInformationStyled = styled.div`
    background-color: #fff;
    margin-top: 20px;
    padding-top: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const UploadInformationTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 20px;
    color: #777;
`;

export const UploadInformationList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;
    border: 1px solid #ccc;
`;

export const UploadInformationItem = styled.li`
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
    background-color:  ${randomColor};
`;

export const UploadInformationLabel = styled.span`
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
    color: white;
`;

export const UploadInformationQuantity = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: white;
`;