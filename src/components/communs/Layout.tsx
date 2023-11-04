import { ReactNode } from "react"
import Header from "../organisms/Header"

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
    <>
        <Header />
        {children}
    </>
    )
}