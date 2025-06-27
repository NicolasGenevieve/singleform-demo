const Result = ({ username, email, password, setResult }) => {
  return (
    <>
      <div className="title">
        <h1>Results</h1>
      </div>
      <div className="result">
        <p>Name : {username}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button onClick={() => setResult(false)} className="register">
        Edit your information
      </button>
    </>
  );
};

export default Result;
