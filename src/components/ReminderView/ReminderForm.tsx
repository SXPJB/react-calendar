import {useAppContext} from "../context/AppContext.tsx";
import {useEffect} from "react";

const ReminderFrom = ({dateSelected}: { dateSelected: string }) => {

    const {data, setData, handleChange, handleTextAreaChange} = useAppContext()

    useEffect(() => {
        if (dateSelected) {
            setData({...data, date: dateSelected})
        }
    }, [dateSelected])

    return (
        <>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    className="form-control"
                    id="description"
                    placeholder="Description"
                    name='description'
                    value={data.description}
                    onChange={handleTextAreaChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">
                    Date
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    placeholder="Date"
                    value={data.date}
                    disabled
                />
            </div>
        </>
    )
}

export default ReminderFrom;