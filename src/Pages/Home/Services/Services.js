import React from 'react';
import Service from './Service';
import Fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'


const Services = () => {

    const ServicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Fluoride,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            color: 'text-white',
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
            bgClass: 'bg-accent',
            color: 'text-white',
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: teeth,
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
            color: 'text-white',
        }
    ]



    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>OUR SERVICES</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>

                {
                    ServicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    >

                    </Service>)
                }
            </div>

        </div>
    );
};

export default Services;