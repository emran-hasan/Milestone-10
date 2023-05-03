import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitterSquare,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            <div className='mt-5'>
                <h3>Find us on</h3>
                <ListGroup>
                        <ListGroup.Item><FaFacebook />  Facebook</ListGroup.Item>
                        <ListGroup.Item><FaTwitterSquare />  Twitter</ListGroup.Item>
                        <ListGroup.Item><FaInstagram />  Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='text-center'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;