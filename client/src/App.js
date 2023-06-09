import './App.css';
import './Assets/custom.css'; 
import MovieList from './components/MovieList/MovieList';
import Header from './components/Header/header';
// import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import { useState, useEffect } from 'react';
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  function postRenderHandler(){
    const token = localStorage.getItem("token");
    if(token) {
      setLoggedIn(true); 
    }
  }

  function handleSuccessfulLogin(){
    setLoggedIn(true);
  }
  useEffect(postRenderHandler, []);
  return (
    <div className="App">
      <p>
        <Header />
        {isLoggedIn? (<MovieList />):(<SignUp onLoginSuccess={handleSuccessfulLogin}/>)}
      </p>
    </div>
  );
}
export default App;
