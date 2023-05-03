import React from 'react';
import logo from '../../../../src/assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or FavourJournalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
            <div className='d-flex bg-warning bg-gradient'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={50}>TI can be a React component, multiple React components, or just some text......    
                I can be a React component, multiple React components, or just some text.</Marquee>
            </div>

            {/* navbar start */}
            
        </Container>
    );
};

export default Header;