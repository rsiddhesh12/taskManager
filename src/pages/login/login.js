import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import your CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isAuthenticated = true; // Replace with actual logic
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-field">
          <label>Password</label>
          <inpu
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={handlePasswordVisibility}
            className="password-toggle"
            role="button"
            aria-label="Toggle password visibility"
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
