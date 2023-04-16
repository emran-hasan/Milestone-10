import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/Firebase.config';
import { Link } from 'react-router-dom';



const auth = getAuth(app)

const Register = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit =event=>{
        event.preventDefault()
        setSuccess('')
        setError('')
        const email =event.target.email.value
        const password =event.target.password.value
        console.log(email,password);

        // validation
        if(!/(?=.*[a-zA-Z])/.test(password)){
            setError('Please enter combination letter case !')
            return;
        }else if(!/(?=.*[!#$%&? "])/.test(password) ){
            setError('Special characters')
            return;
        }
        // create user in FB
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            event.target.reset()
            setSuccess('User has created successfully')
        })
        .catch(error=>{
            console.error(error);
            setError(error.message)
        })
    }
    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        // setEmail(event.target.value);
    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
    }

    return (
        <div className='w-50 mx-auto'>
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit} >
                <input className='w-50 rounded mb-3 p-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your email' required />
                <br />
                <input className='w-50 rounded mb-3 p-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='password' required />
                <br />
                <p>{error}</p>
                <p className='text-success'>{success}</p>
                <button className='btn btn-primary' type='submit' value='Register'>Submit</button>
            </form>
            <p><small>Already have an account? Please <Link to="/login">Login</Link> </small></p>
        </div>
    );
};

export default Register;