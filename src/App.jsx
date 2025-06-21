import "./App.css";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  if (password != confirmPassword) {
    alert("Vos deux mots de passe ne sont pas identiques");
  }

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    console.log(event.target.value);
    setConfirmPassword(event.target.value);
  };

  return (
    <>
      <main>
        <div className="title">
          <h1>Create account</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Name</label>
          <input
            id="username"
            type="text"
            placeholder="Jean Dupont"
            name="username"
            onChange={handleUsernameChange}
            value={username}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="jeandupont@lereacteur.io"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="lErEaCtEuR2025"
            name="password"
            onChange={handlePasswordChange}
            value={password}
          />
          <label htmlFor="confirmPassword">Confirm your password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="lErEaCtEuR2025"
            name="confirmPassword"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
          />
          <button type="submit" className="register">
            Register
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default App;
