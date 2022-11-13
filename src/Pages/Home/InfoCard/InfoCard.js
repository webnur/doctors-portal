import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass, color} = card;
    return (
        <div className={`card px-6 py-5 md:card-side shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className={`card-title ${color}`}>{name}</h2>
                <p className={color}>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;