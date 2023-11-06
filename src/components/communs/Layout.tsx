import { ReactNode } from "react"
import Header from "../organisms/Header"
import { StoreWrapper } from "@/store/StoreWrapper"

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
    <>
        <Header />
        <StoreWrapper>
            {children}
        </StoreWrapper>
    </>
    )
}