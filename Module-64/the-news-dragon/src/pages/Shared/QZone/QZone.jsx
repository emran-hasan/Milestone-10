import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary text-center'>
            <h3>Q-Zone</h3>
            <div >
                <img style={{width:'200px'}} src={qzone1} alt="" />
                <img style={{width:'200px'}} src={qzone2} alt="" />
                <img style={{width:'200px'}} src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;