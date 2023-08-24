import React from 'react'
import { NavbarLayout } from './navbar'
import { Footer } from './footer'

const Layout = ({ children }) => {
    return (
        <div>
            <NavbarLayout />
            <main> {children} </main>
            <Footer/>
        </div>
    )
}

export default Layout