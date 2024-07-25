import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-2xl font-bold'>
          <Link to='/'>IVANECO</Link>
        </div>
        <ul className='flex space-x-4'>
          {user ? (
            <>
              <li>
                <Link to='/profile' className='text-white hover:text-gray-400'>
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className='text-white hover:text-gray-400'
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/login' className='text-white hover:text-gray-400'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='/register' className='text-white hover:text-gray-400'>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
