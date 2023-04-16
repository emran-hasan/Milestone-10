import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app)

const Login = () => {
    const [error, setError] =useState('')
    const [success, setSuccess] = useState('')
    


    const handleLoginSubmit =event=>{
        event.preventDefault()
        setError('')
        setSuccess('')
        const email = event.target.email.value;
        const password =event.target.password.value;
        console.log(email, password);
        setSuccess('Successfully')

        if(!/(?=.*[a-zA-Z])/.test(password)){
            setError('Please enter letter')
            return;
        }
        signInWithEmailAndPassword(auth,email.password)
        .then(result=>{
            const loggedUser = result.user
            setSuccess('Login successfully')
        })
        .catch(error=>{
            setError(error)
        })
    }



    return (
        <div className='w-50 mx-auto'>
            <h2>Please login</h2>
            <form onSubmit={handleLoginSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" name='password' class="form-control" id="exampleInputPassword1" required/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <p>{error}</p>
                    <p>{success}</p>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <p><small>New to this website? Please <Link to="/register">Register</Link> </small></p>
                    
        </div>
    );
};

export default Login;