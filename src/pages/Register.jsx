import axios from 'axios';
import { errorAlert, successAlert } from '../utils/alerts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userDataSchema } from '../utils/validationSchema';
import useLoader from '../hooks/useLoader';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { /*isLoading,*/ showLoader, hideLoader } = useLoader();
  const navigate = useNavigate();
  const URL_BASE = import.meta.env.VITE_URL_BASE;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(userDataSchema) });

  const onSubmit = async (formData) => {
    showLoader();
    try {
      await axios.post(`${URL_BASE}/users/create-user`, formData);
      successAlert('¡Bien!', 'Registro exitoso.', () => {
        navigate('/login');
      });
    } catch (error) {
      errorAlert(
        'Error',
        error.response?.data?.errors[0]?.msg || 'Error desconocido.'
      );
    } finally {
      reset();
      hideLoader();
    }
  };

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'
        >
          <h2 className='text-2xl font-bold mb-6 text-gray-900'>Registro</h2>
          <div className='mb-4'>
            <label
              htmlFor='firstName'
              className='block text-gray-700 font-medium mb-2'
            >
              Nombre
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              {...register('firstName')}
              className='w-full p-2 border border-gray-300 rounded-lg'
            />
            {errors.firstName && (
              <span className='text-xs text-red-500'>
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='lastName'
              className='block text-gray-700 font-medium mb-2'
            >
              Apellido
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              {...register('lastName')}
              className='w-full p-2 border border-gray-300 rounded-lg'
              required
            />
            {errors.lastName && (
              <span className='text-xs text-red-500'>
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='mb-4 col-span-2'>
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
                required
              />
              {errors.email && (
                <span className='text-xs text-red-500'>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className='mb-6'>
              <label
                htmlFor='age'
                className='block text-gray-700 font-medium mb-2'
              >
                Edad
              </label>
              <input
                type='number'
                id='age'
                name='age'
                {...register('age')}
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              />
              {errors.age && (
                <span className='text-xs text-red-500'>
                  {errors.age.message}
                </span>
              )}
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div className='mb-4 col-span-2'>
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
                required
              />
              {errors.password && (
                <span className='text-xs text-red-500'>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className='mb-4 col-span-2'>
              <label
                htmlFor='password'
                className='block text-gray-700 font-medium mb-2'
              >
                Repetir contraseña
              </label>
              <input
                type='password'
                id='checkPassword'
                name='checkPassword'
                {...register('checkPassword')}
                className='w-full p-2 border border-gray-300 rounded-lg'
                required
              />
              {errors.checkPassword && (
                <span className='text-xs text-red-500'>
                  {errors.checkPassword.message}
                </span>
              )}
            </div>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300'
          >
            Registrar
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
