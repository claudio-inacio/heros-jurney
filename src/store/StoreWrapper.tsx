'use client';
import { Provider } from "react-redux";
import { store } from ".";
import { ReactNode } from "react";

interface IStoreWrapper{
    children: ReactNode;
}

export function StoreWrapper({children}: IStoreWrapper){
    return <Provider store={store}>
                {children}
                
    </Provider>
}