import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container text-center'>
            <h2>Terms & conditions.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officiis, porro excepturi eligendi nisi vitae?</p>
            <p>Go back to <Link to = '/register'>Register</Link></p>
        </div>
    );
};

export default Terms;