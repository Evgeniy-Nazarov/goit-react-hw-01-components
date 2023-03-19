import { Profile, ProfileImage, ProfileLocation, ProfileName, ProfileTag } from "./Profile.styled";

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