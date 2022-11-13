import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'


const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            color: 'text-white',
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Faridabad, dhaka, bangladesh',
            icon: marker,
            bgClass: 'bg-accent',
            color: 'text-white',
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+8801634146292',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            color: 'text-white',
        }
    ]

    return (
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                >

                </InfoCard>)
            }

        </div>
    );
};

export default InfoCards;