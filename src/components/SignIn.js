import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      alert('Please enter email and password');
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/dashboard');
    } catch (error) {
      let errorMessage = 'Login failed. ';
      
      if (error.code === 'auth/user-not-found') {
        errorMessage += 'No account found with this email.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage += 'Incorrect password.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage += 'Invalid email address.';
      } else {
        errorMessage += error.message;
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Solar Monitor</h1>
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
};

export default SignIn;
