import React from 'react';
const handleFormSubmit = event =>{
    event.preventDefault ()
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
}

const RegisterBs = () => {
    return (
        <div>
            <form onSubmit={handleFormSubmit} className='w-50 mx-auto'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='your email'/>
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='password'/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default RegisterBs;