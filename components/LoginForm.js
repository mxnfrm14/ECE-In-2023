// Login.js (Login page component)
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus, setAlertStatus] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

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
        setAlertStatus('success')
        setAlertMessage('Connexion réussie ! Redirection en cours..')
        setShowAlert(true); 
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/'); // Redirect to the protected route
      } else {
        const error = await response.json();
        setAlertStatus('error')
        setAlertMessage(error.message)
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        // Display error message on the login page
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
      <div className="card-body">
        <div className="mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="input input-bordered w-full" 
        />
            </label>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input-group">
            <span>Password</span>
            <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="input input-bordered w-full"
        />
          </label>
        </div>
        <div className="mt-6">
        <button type='submit' className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
        </div>
      </div>
      <div className={`alert alert-${alertStatus} shadow-lg absolute top-0 w-96 mt-5 mr-2 ${showAlert ? 'blockAlert' : 'hiddenAlert'}` }>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{alertMessage}</span>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
