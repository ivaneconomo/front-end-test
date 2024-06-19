import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { loginDataSchema } from '../utils/validationSchema';
import { errorAlert, successAlert } from '../utils/alerts';
import { useNavigate } from 'react-router-dom';
import useLoader from '../hooks/useLoader';
import clientAxios from '../utils/client-axios';

function Login() {
  const { /*isLoading,*/ showLoader, hideLoader } = useLoader();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(loginDataSchema) });

  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    showLoader();
    try {
      const response = await clientAxios.post('/login', formData);
      localStorage.setItem('token', response?.data?.token);

      successAlert('¡Bien!', 'Login exitoso.', () => {
        navigate('/profile');
      });
    } catch (error) {
      hideLoader();
      errorAlert(
        'Error',
        error.response?.data?.message || 'Error desconocido.'
      );
    } finally {
      reset();
      hideLoader();
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'
      >
        <h2 className='text-2xl font-bold mb-6 tex-gray-900'>
          Inicio de Sesión
        </h2>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='block text-gray-700 font-medium mb-2'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            {...register('email')}
            className='w-full p-2 border border-gray-300 rounded-lg'
          />
          {errors.email && (
            <span className='text-xs text-red-500'>{errors.email.message}</span>
          )}
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block text-gray-700 font-medium mb-2'
          >
            Contraseña
          </label>
          <input
            type='password'
            id='password'
            name='password'
            {...register('password')}
            className='w-full p-2 border border-gray-300 rounded-lg'
          />
          {errors.password && (
            <span className='text-xs text-red-500'>
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300'
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
