import React, {Dispatch, SetStateAction} from "react";
import {EventInfo} from "./calendar";

export interface AppContextValue {
    dateSelected: string;
    setSelectDate: Dispatch<SetStateAction<string>>;
    data: EventInfo;
    listEvents: EventInfo[];
    setData: Dispatch<SetStateAction<EventInfo>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    addEvent: (event: EventInfo) => void;
    removeEvent: (event: EventInfo) => void;
}

export interface AppContextProviderProps {
    children: React.ReactNode
}