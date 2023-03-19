import { User } from "./Profile/User";
import users from "./Profile/users.json"
import { UserStyled } from "./Profile/User.styled";
import { Stats } from "./Profile/Stats";
import dataInformation from "./Statistics/data.json";
import { UploadInfo } from "./Statistics/UploadInformation";
import friends from "./FriendList/FriendsCatalog.json";
import { FriendsItems } from "./FriendList/Friends";




export const App = () => {
  return (
    <UserStyled>
      <User user={users} />
      <Stats stats={users.stats} />
      <UploadInfo uploadInfo={dataInformation}></UploadInfo>
      <FriendsItems friendsArray={friends} />
    </UserStyled>
    
  );
};
