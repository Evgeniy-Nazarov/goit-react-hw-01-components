import { UploadInformationItem, UploadInformationLabel, UploadInformationList, UploadInformationQuantity, UploadInformationStyled, UploadInformationTitle } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const UploadInfo = ({ uploadInfo }) => {
    return (
        <UploadInformationStyled>
        <UploadInformationTitle>Upload stats</UploadInformationTitle>
        <UploadInformationList>
                {uploadInfo.map(({id, label, percentage}) => (
                
            <UploadInformationItem key={id}>
                <UploadInformationLabel>{label}</UploadInformationLabel>
                <UploadInformationQuantity>{percentage}%</UploadInformationQuantity>
            </UploadInformationItem>
            ))}
        </UploadInformationList>
        </UploadInformationStyled>
    );
}
    

UploadInfo.propTypes = {
    uploadInfo: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}