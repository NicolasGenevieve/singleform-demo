import Input from "./Input.jsx";

const Form = ({
  title,
  username,
  email,
  password,
  confirmPassword,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  submited,
  setSubmited,
  mdp,
  setMdp,
  setResult,
}) => {
  const formValid =
    username &&
    email &&
    password &&
    confirmPassword &&
    password === confirmPassword;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);

    const samePassword = password === confirmPassword;
    setMdp(samePassword);

    if (!formValid) return;

    setResult(true);
  };

  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          id="username"
          title="Name"
          type="text"
          placeholder="Jean Dupont"
          name="username"
          value={username}
          onChange={setUsername}
          hasError={submited && !username}
        />
        <Input
          id="email"
          title="Email"
          type="email"
          placeholder="jeandupont@mail.com"
          name="email"
          value={email}
          onChange={setEmail}
          hasError={submited && !email}
        />
        <Input
          id="password"
          title="Password"
          type="password"
          placeholder="lErEaCtEuR2025"
          name="password"
          value={password}
          onChange={setPassword}
          hasError={submited && !password}
        />
        <Input
          id="confirmPassword"
          title="Confirm your password"
          type="password"
          placeholder="lErEaCtEuR2025"
          name="confirmPassword"
          value={confirmPassword}
          onChange={setConfirmPassword}
          hasError={(submited && !confirmPassword) || !mdp}
        />
        {!mdp && <p className="pwd">Vos mots de passe ne correspondent pas</p>}

        <button type="submit" className="register">
          Register
        </button>
      </form>
    </>
  );
};

export default Form;
