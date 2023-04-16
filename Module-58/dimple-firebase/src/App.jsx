import { useState } from 'react'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './Firebase/Firebase.config';

const auth =getAuth(app)
const googleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null)

  const handleGoogle = event =>{
    signInWithPopup(auth,googleProvider)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser)
    })
    .catch(error=>{
      console.log(error);
    })
  }


  return (
    <div className="App">
      
      <button onClick={handleGoogle}> Google</button>
      <h1>Vite + React</h1>
       {user && 
        <div className='card'>
            <p>{user.displayName}</p>
            <p>{user.email}</p>
        </div>
      }
      
    </div>
  )
}

export default App
