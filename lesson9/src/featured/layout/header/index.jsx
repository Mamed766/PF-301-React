import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { navbarItems } from '../../../static/Navbaritems'

const Header = () => {
    const navigation = useNavigate()
    const location = useLocation()
    return (

        <header className="flex flex-wrap items-center">
            <nav className="flex justify-between bg-gray-100 text-white w-screen">
                <div className="px-5 flex justify-between xl:px-12 py-4  w-full items-center">
                    <Link to="/" className="text-3xl font-bold font-heading">
                        <img className="h-9" src="https://png.pngtree.com/png-vector/20220309/ourmid/pngtree-green-sprout-leaf-logo-design-template-png-image_4486740.png" alt="logo" />
                    </Link>
                    <ul className="hidden md:flex px-4 font-semibold font-heading space-x-2">
                        {
                            navbarItems && navbarItems.map((item, index) => (
                                <li key={index}><Link to={item.path} className={
                                    location.pathname === item.path ? "active_link" : "default_link"
                                } >{item.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default Header