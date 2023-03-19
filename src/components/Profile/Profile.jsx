import { Label, Profile, ProfileImage, ProfileLocation, ProfileName, ProfileTag, Quantity, StatsItem, StatsStyled } from "./Profile.styled";
import PropTypes from 'prop-types';

export const User = ({ user: { username, tag, location, avatar, stats } }) => {
    return (
        <Profile>
            <ProfileImage src={avatar} alt={username}/>
            <ProfileName>{username}</ProfileName>
            <ProfileTag>{tag}</ProfileTag>
            <ProfileLocation>{location}</ProfileLocation>
            <StatsStyled>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem><Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
            </StatsItem>
    </StatsStyled>
        </Profile>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    })
}
