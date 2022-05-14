import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryBtn from './PrimaryBtn';
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{background: `url(${bg})`,
        backgroundSize: 'cover'}}>
            <div className="justify-center items-center my-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={chair} className=" rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <PrimaryBtn>GET STARTED</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;