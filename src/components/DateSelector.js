import React, {useState} from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import CalendarIcon from '../assets/CalendarIcon.svg'

const DateSelector = () => {

    const [selectedDate, setSelectedDate] = useState(null)

    return (
        // <div className='relative flex justify-between items-center border-2 h-9 w-full rounded-lg px-3 py-2 mb-4'>
        
            <div className='flex items-center bg-white  border-2 rounded-lg   '>
                <DatePicker
                    selected={selectedDate}
                    onChange = {(date) => {
                        setSelectedDate(date);
                    }}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="Select"
                    showMonthDropdown
                    showYearDropdown
                    scrollableMonthYearDropdown
                    
                    
                    className='appearance-none bg-transparent border-none w-[350px] h-9 text-gray-700 mr-3 px-3  leading-tight focus:outline-none  '
                    
                />
                <img className='' src={CalendarIcon} alt="calendar"/>
            </div>

        
    )
}

export default DateSelector;