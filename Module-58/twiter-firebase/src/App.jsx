import { useState } from 'react'
import { TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './Firebase/Firebase.config';
const auth = getAuth(app)
const twitterProvider = new TwitterAuthProvider();

function App() {
  const [user, setUser] = useState(0)

  const handleGoogle =()=>{
    signInWithPopup(auth, twitterProvider)
    .then(result =>{
      const loggedUser =result.user;
      console.log(loggedUser);
      setUser(loggedUser)
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className="App">
     
      <h1>Vite + React</h1>
      <button onClick={handleGoogle}>Google</button>
      <div className="card">
        
      </div>
      
    </div>
  )
}

export default App
