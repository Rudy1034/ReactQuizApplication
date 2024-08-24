import React, { useContext, useState } from 'react';
import '../App.css';
import { QuizContext } from '../Helpers/Context';
import { Credentials } from '../Helpers/Credentials';

const Login = () => {
  const { setGameState } = useContext(QuizContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = Credentials.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setGameState('menu');
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="Login">
      <h2>Login to start the quiz</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
