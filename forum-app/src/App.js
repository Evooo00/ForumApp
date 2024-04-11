import "./App.css";
import supabase from "./supabaseClient";

function App() {
  console.log(supabase);
  return (
    <div className="container">
      <header>
        <p className="accountUserName">User Name</p>
        <div className="loginRegisterButtons">
          <button className="login btn">Login</button>
          <button className="register btn">Register</button>
        </div>
      </header>
      <main>
        <textarea
          className="inputTweet"
          placeholder="What do you want to share?"
        ></textarea>
        <button className="shareButton">Share</button>
      </main>
    </div>
  );
}

export default App;
