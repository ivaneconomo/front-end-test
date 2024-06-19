import useLoader from '../hooks/useLoader';
import clientAxios from '../utils/client-axios';

const Profile = () => {
  const { /*isLoading,*/ showLoader, hideLoader } = useLoader();

  const handleClick = async () => {
    try {
      showLoader();
      const response = await clientAxios.get(`/users/get-users`);
      console.log(response);
    } catch (error) {
      console.error(error.response?.data || 'Error desconocido.');
    } finally {
      hideLoader();
    }
  };

  return (
    <div>
      <button
        className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300'
        onClick={handleClick}
      >
        Get
      </button>
    </div>
  );
};

export default Profile;
