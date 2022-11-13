import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    // const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <header style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} className='my-5'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="lg:w-1/2 w-full rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        >

                        </DayPicker>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;