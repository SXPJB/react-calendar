import {useAppContext} from "../context/AppContext.tsx";
import ReminderFrom from "./ReminderForm.tsx";
import {useState} from "react";
import ReminderList from "./ReminderList.tsx";

const ReminderView = () => {
    const {dateSelected, data, addEvent} = useAppContext()
    const [taps, setTaps] = useState([{tap: 1, active: true}, {tap: 2, active: false}])

    const onChangeTap = (tap: number) => {
        const newTap = taps.map(t => {
            if (t.tap === tap) {
                return {
                    ...t,
                    active: true
                }
            }
            return {
                ...t,
                active: false
            }
        })
        setTaps(newTap)
    }

    return (
        <>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <ul className='nav nav-tabs'>
                                <li className='nav-item'>
                                    <button
                                        className={`nav-link ${taps[0].active ? 'active' : ''}`}
                                        onClick={() => onChangeTap(1)}
                                        aria-current='page'>
                                        Add Reminder
                                    </button>
                                </li>
                                <li className='nav-item'>
                                    <button
                                        className={`nav-link ${taps[1].active ? 'active' : ''}`}
                                        onClick={() => onChangeTap(2)}
                                        aria-current='page'>
                                        Reminder List
                                    </button>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            {taps[0].active && <ReminderFrom dateSelected={dateSelected}/>}
                            {taps[1].active && <ReminderList/>}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            {taps[0].active && <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => addEvent(data)}
                            >
                              Save changes
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReminderView;