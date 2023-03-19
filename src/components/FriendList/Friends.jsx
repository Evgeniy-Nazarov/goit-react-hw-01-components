import { FriendAvatar, FriendList, FriendListItem, FriendName, FriendStatus } from "./Friends.styled";
import PropTypes from 'prop-types';

export const FriendsItems = ({ friendsArray }) => {
    return (
        <FriendList>
            {friendsArray.map(({ id, isOnline, avatar, name}) =>
                <FriendListItem key={id}>                
                    <FriendStatus>{isOnline}</FriendStatus>
                    <FriendAvatar src={avatar} alt="User avatar" width="48px"/>
                    <FriendName>{name}</FriendName>
            </FriendListItem>
        )}
            </FriendList>
    );
}

FriendsItems.propTypes = {
    friendsArray: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}
