import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';
import Loading from '../../Shared/Loading/Loading'


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise)

const Payment = () => {
    const navigation = useNavigation()
    const booking = useLoaderData();

   if(navigation.state === "loading"){
    return <Loading></Loading>
   }
    return (
        <div>
            <h2 className="text-3xl">Payment for {booking.treatment}</h2>
            <p className="text-xl">Please Pay <strong>${booking.price}</strong> for Your appointment on {booking.appointmentDate} at {booking.slot}</p>

            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                    booking= {booking}
                    />
                </Elements>

            </div>
        </div >
    );
};

export default Payment;