import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {

    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')

    // const {data:appointmentOptions= []} = useQuery({
    //     queryKey:['appointmentOption'],
    //     queryFn: () => fetch('http://localhost:5000/appointmentOption')
    //     .then(res => res.json())
    // })

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date,],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOption?date=${date}`)
            const data = await res.json()
            return data
        }
    })


    if(isLoading){
        return <Loading></Loading>
    }


    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOption')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])


    return (
        <section className='my-16'>
            <p className='text-2xl text-center text-secondary font-bold mb-6'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    >
                    </AppointmentOption>)
                }
            </div>

            {treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    refetch={refetch}
                    setTreatment={setTreatment}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;