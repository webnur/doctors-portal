import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const date = format(selectedDate, 'PP')
    const { name, slots } = treatment; // treatment is appointment options just different name

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value; 
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }

        console.log(booking)
        setTreatment(null)
        
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                           
                            {
                                slots.map((slot, key) =>  <option value={slot} key={key}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input w-full input-bordered" />
                        <input type="email" name='email' placeholder="Email Address" className="input w-full input-bordered" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full input-bordered" />
                        <input type="submit" value="Submit" className="input w-full btn-accent" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;