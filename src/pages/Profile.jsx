import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <div>
          <img
            src={user?.avatar || 'https://via.placeholder.com/150'}
            alt='Avatar'
          />
        </div>
        <div>
          <h2>{`${user?.firstName} ${user?.lastName}` || 'User name'}</h2>
          <p>{user?.email || 'user@example.com'}</p>
          <p>{user?.role}</p>
          <p>{user?.id}</p>
          <p>{user?.age}</p>
          <p>{user?.avatar}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
