import CalendarComponent from "./components/Calendar/CalendarComponent.tsx";
import {AppContextProvider} from "./components/context/AppContext.tsx";
import ReminderView from "./components/ReminderView/ReminderView.tsx";

function App() {
    return (
        <AppContextProvider>
            <CalendarComponent/>
            <ReminderView/>
        </AppContextProvider>
    )
}

export default App
