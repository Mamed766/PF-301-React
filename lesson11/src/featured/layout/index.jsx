import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout