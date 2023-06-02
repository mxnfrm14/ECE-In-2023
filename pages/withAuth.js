// withAuth.js (HOC for protecting routes)
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from local storage or state management
      if (!user) {
        router.push('/login'); // Redirect to login page if user is not logged in
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
