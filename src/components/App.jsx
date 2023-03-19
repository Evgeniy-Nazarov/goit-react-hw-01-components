import { User } from "./Profile/User";
import users from "./Profile/users.json"
import dataInformation from "./Statistics/data.json";
import { UploadInfo } from "./Statistics/UploadInformation";
import friends from "./FriendList/FriendsCatalog.json";
import { FriendsItems } from "./FriendList/Friends";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";
import { UserStyled } from "./Profile/Profile.styled";




export const App = () => {
  return (
    <UserStyled>
      <User user={users} />
      <UploadInfo uploadInfo={dataInformation}></UploadInfo>
      <FriendsItems friendsArray={friends} />
      <TransactionHistory transactions={transactions} />
    </UserStyled>
    
  );
};
