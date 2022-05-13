import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info></Info>
            <Services></Services>
            <Appointment />
            <Testimonial />
        </div>
    );
};

export default Home;