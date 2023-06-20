'use client'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function PAndPDatePicker(){

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className='my-4'>
                <DatePicker
                    className='w-full border-2 rounded-md'
                    label="Vist Date"
                />
            </div>
        </LocalizationProvider>

    )
}