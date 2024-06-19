const Loader = () => {
  return (
    <div className='flex items-center justify-center fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-75 z-50'>
      <div className='w-16 h-16 border-8 border-t-8 border-gray-300 border-t-blue-500 rounded-full animate-spin'></div>
    </div>
  );
};

export default Loader;
