import { FriendAvatar, FriendList, FriendListItem, FriendName, FriendStatus } from "./Friends.styled";


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
