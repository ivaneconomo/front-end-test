import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-2xl font-bold'>
          <Link to='/'>IVANECO</Link>
        </div>
        <ul className='flex space-x-4'>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
