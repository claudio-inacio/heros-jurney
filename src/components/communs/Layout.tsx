import { ReactNode } from "react"
import Header from "../organisms/Header"
import { StoreWrapper } from "@/store/StoreWrapper"
import { store, useHeroSelector } from "@/store"
import { Provider } from "react-redux"

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
    <>
    <Provider store={store}>
        <Header />
        <StoreWrapper>
            {children}
        </StoreWrapper>
    </Provider>
    </>
    )
}