import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardInfo="Lorem Ipsum is simply dummy" cardTitle="Opening Hours" className img={clock}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-accent to-accent" cardInfo="Brooklyn, NY 10036, United States" cardTitle="Visit our location" className img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardInfo="+000 123 456789" cardTitle="Contact us now" className img={phone}></InfoCard>
        </div>
    );
};

export default Info;