import React, { useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth'
const auth = getAuth(app)

const Register = () => {

    const [error,setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit =(event)=>{
        event.preventDefault();
        
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email,password);

        // create user firebase account
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const logged =result.user
            console.log(logged);
            setError('');
            event.target.reset();
            setSuccess('User has been created successfully');

        })
        .catch(error =>{
            console.error(error)
            setError(error.message);
        })
    }

    const handleEmailChange = (e) => {
        // setEmail(e.target.value);
    }
    const handlePasswordBlur =(e) =>{
        // console.log(e.target.value);
    }
    return (
        <div className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded p-2' onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Enter your email'/>
                <br />
                <input className='w-50 mb-4 rounded p-2' onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Password'/>
                <br />
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;