import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProvider';

const Header = () => {
    const {user, logOut} =useContext(authContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
           <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <button onClick={handleLogOut} className="btn btn-xs">Sign out</button>
                </> : <Link to="/login">Login </Link>
                }
            </div>
        </div>
    );
};

export default Header;