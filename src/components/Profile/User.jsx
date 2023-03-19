import { Profile, ProfileImage, ProfileLocation, ProfileName, ProfileTag } from "./Profile.styled";
import PropTypes from 'prop-types';

export const User = ({ user: { username, tag, location, avatar } }) => {
    return (
        <Profile>
            <ProfileImage src={avatar} alt={username}/>
            <ProfileName>{username}</ProfileName>
            <ProfileTag>{tag}</ProfileTag>
            <ProfileLocation>{location}</ProfileLocation>
        </Profile>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    })
}
