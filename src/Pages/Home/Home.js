import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';
import MakeAppointment from './MakeAppointment';


const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Info></Info>
            <Services></Services>
            <MakeAppointment />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;