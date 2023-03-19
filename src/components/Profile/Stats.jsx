import { Label, Quantity, StatsItem, StatsStyled } from "./Stats.styled";
import PropTypes from 'prop-types';


export const Stats = ({ stats: {followers, views, likes} }) => {
    return (
        <StatsStyled>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </StatsItem>
            <StatsItem><Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </StatsItem>
    </StatsStyled>
    );

};


Stats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}
