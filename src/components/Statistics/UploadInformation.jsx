import { UploadInformationItem, UploadInformationLabel, UploadInformationList, UploadInformationQuantity, UploadInformationStyled, UploadInformationTitle } from "./UploadInformation.styled";

export const UploadInfo = ({ uploadInfo }) => {
    return (
        <UploadInformationStyled>
        <UploadInformationTitle>Upload stats</UploadInformationTitle>
        <UploadInformationList>
                {uploadInfo.map((upload) => (
                
            <UploadInformationItem key={upload.id}>
                <UploadInformationLabel>{upload.label}</UploadInformationLabel>
                <UploadInformationQuantity>{upload.percentage}%</UploadInformationQuantity>
            </UploadInformationItem>
            ))}
        </UploadInformationList>
        </UploadInformationStyled>
    );
    }