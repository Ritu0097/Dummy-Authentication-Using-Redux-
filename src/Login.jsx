import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './actions';
import './App.css'; // Import the CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Invalid username or password');
        }
      })
      .then((data) => {
        dispatch(loginSuccess(data.token, data.id)); 
        localStorage.setItem('token', data.token); 
        localStorage.setItem('id', data.id); 
        window.location.href = '/profile'; 
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <div className="login-input">
        <label className="login-label">Username:</label>
        <input
          type="text"
          className="login-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="login-input">
        <label className="login-label">Password:</label>
        <input
          type="password"
          className="login-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="login-error">{error}</div>}
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
