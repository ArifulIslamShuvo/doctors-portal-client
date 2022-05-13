import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from './PrimaryBtn';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center pl-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 pr-24'>
                <h3 className='text-xl text-secondary font-bold py-5'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                
                <p className='text-white py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <PrimaryBtn>GET STARTED</PrimaryBtn>
            </div>
        </section>
    );
};

export default Appointment;