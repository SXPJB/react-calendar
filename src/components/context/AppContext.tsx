import React, {createContext, useContext, useState} from "react";
import {AppContextProviderProps, AppContextValue} from "../../types/context";
import {EventInfo} from "../../types/calendar";

const AppContext = createContext<AppContextValue>({} as AppContextValue)


export const useAppContext = () => {
    const context = useContext<AppContextValue>(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppContextProvider')
    }
    return context
}

export const AppContextProvider = ({children}: AppContextProviderProps) => {
    const [data, setData] = useState<EventInfo>({
        name: '',
        description: '',
        date: ''
    })
    const [listEvents, setListEvents] = useState<EventInfo[]>([])
    const [dateSelected, setSelectDate] = useState('')

    const addEvent = (event: EventInfo) => {
        setListEvents([...listEvents, event])
        setData({
            ...data,
            name: '',
            description: ''
        })
    }

    const removeEvent = (event: EventInfo) => {
        setListEvents(listEvents.filter((e) => e !== event))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    return (
        <AppContext.Provider value={{
            dateSelected,
            setSelectDate,
            data,
            setData,
            handleChange,
            handleTextAreaChange,
            listEvents,
            addEvent,
            removeEvent
        }}>
            {children}
        </AppContext.Provider>
    )
}