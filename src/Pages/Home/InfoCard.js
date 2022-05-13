import React from 'react';

const InfoCard = ({img, cardTitle, cardInfo, bgClass}) => {
    return (
        <div>
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure>
                    <img className='mx-5 py-8' src={img} alt="clock" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-white">{cardTitle}</h2>
                    <p className='text-white'>{cardInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;