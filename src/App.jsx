import "./App.css";
import Form from "./components/Form.jsx";
import Result from "./components/Result.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [result, setResult] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [mdp, setMdp] = useState(true);

  return (
    <>
      <main>
        {result ? (
          <Result
            username={username}
            email={email}
            password={password}
            setResult={setResult}
          />
        ) : (
          <>
            <Form
              title="Create account"
              username={username}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
              setConfirmPassword={setConfirmPassword}
              submited={submited}
              setSubmited={setSubmited}
              mdp={mdp}
              setMdp={setMdp}
              setResult={setResult}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
