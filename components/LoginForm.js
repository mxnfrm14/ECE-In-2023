// Login.js (Login page component)
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credentials }),
      });

      if (response.ok) {
        const user = await response.json();
        // Store the user data in local storage or state management
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/'); // Redirect to the protected route
      } else {
        const error = await response.json();
        // Display error message on the login page
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
