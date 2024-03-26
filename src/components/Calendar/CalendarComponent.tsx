import {addMonths, eachDayOfInterval, endOfMonth, format, getDay, startOfMonth} from "date-fns";
import {useMemo, useState} from "react";
import {useAppContext} from "../context/AppContext.tsx";

const CalendarComponent = () => {

    const [currentDate, setCurrentDate] = useState<Date>(new Date())
    const firstDayOfMonth = useMemo(() => startOfMonth(currentDate), [currentDate]);
    const lastDayOfMonth = useMemo(() => endOfMonth(currentDate), [currentDate]);

    const daysInMonth = useMemo(() => eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    }), [firstDayOfMonth, lastDayOfMonth]);

    const startingDayIndex = useMemo(() => getDay(firstDayOfMonth), [firstDayOfMonth]);

    const {setSelectDate, listEvents} = useAppContext()

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const totalCells = daysInMonth.length + startingDayIndex;
    const totalWeeks = Math.ceil(totalCells / 7);

    return (
        <div className='container'>
            <div className='row my-2'>
                <div className='col-12'>
                    <h1>Calendar</h1>
                    <h2>{format(currentDate, 'MM/yyyy')}</h2>
                    <div className='d-grid gap-2 d-md-flex'>
                        <button
                            onClick={() => setCurrentDate(addMonths(currentDate, -1))}
                            className='btn btn-outline-success'>Previous
                        </button>
                        <button
                            onClick={() => setCurrentDate(new Date())}
                            className='btn btn-outline-success'
                        >Today
                        </button>
                        <button
                            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                            className='btn btn-outline-success'>Next
                        </button>
                    </div>
                </div>
            </div>
            <div className='row text-center'>
                {days.map(d => (
                    <div key={d} className='col border bg-black text-white'>
                        {d}
                    </div>
                ))}
            </div>
            {[...Array(totalWeeks)].map((_, i) => (
                <div key={i} className='row text-center'>
                    {days.map((_d, j) => {
                        const dayIndex = i * 7 + j - startingDayIndex;
                        const day = daysInMonth[dayIndex];
                        return (
                            <div
                                key={j}
                                className='col border'
                            >
                                {day ? <div
                                    className='p-4 position-relative'
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => setSelectDate(format(day, 'yyyy-MM-dd'))}
                                >
                                    <p>
                                        {format(day, 'd')}
                                    </p>
                                    <span className="position-absolute m-2 top-0 start-0 badge text-bg-success">
                                        {listEvents.filter(e => e.date === format(day, 'yyyy-MM-dd')).length}
                                    </span>
                                </div> : <div/>}
                            </div>
                        )
                    })}
                </div>
            ))}
        </div>
    );

};

export default CalendarComponent;