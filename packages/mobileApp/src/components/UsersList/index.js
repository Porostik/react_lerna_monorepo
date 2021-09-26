import { UsersList as DefaultUsersList } from './UsersList';
import { withState } from './UserList.state';

export const UsersList = withState(DefaultUsersList);
