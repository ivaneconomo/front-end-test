import { createContext, useState } from 'react';
import Loader from '../components/Loader/Loader';

export const LoaderContext = createContext();

// eslint-disable-next-line react/prop-types
export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  return (
    <LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
};
