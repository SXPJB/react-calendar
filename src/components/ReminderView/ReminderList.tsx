import {useAppContext} from "../context/AppContext.tsx";

const ReminderList = () => {
    const {dateSelected, listEvents, removeEvent} = useAppContext()
    const reminderFilter = listEvents.filter(e => e.date === dateSelected)

    return (<>
        <div>{dateSelected}</div>
        {reminderFilter.length === 0 && <div>No reminders</div>}
        <ul>
            {reminderFilter.map(e => <li key={e.name}>{e.name}-{e.description}
                <button
                    type="button"
                    className="btn-close mx-2"
                    onClick={() => removeEvent(e)}
                />
            </li>)}
        </ul>
    </>);
};

export default ReminderList;