import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ children }) => {
    return (
        <div className='flex gap-7'>
            <div className="min-h-screen flex flex-row bg-gray-100 border-r border-solid border-x-blue-600">
                <div className="flex flex-col w-[350px] bg-white  overflow-hidden">
                    <div className="flex items-center justify-center h-20 shadow-md">
                        <img
                            className='h-12 w-12 rounded-full'
                            src='https://www.simpplr.com/wp-content/uploads/2019/08/Simpplr-blog-best-practices-for-creating-an-intranet-dashboard-experience-thumbnail.jpg' />
                    </div>
                    <ul className="flex flex-col py-4">
                        <li>
                            <Link className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                                <Link to="/" className="text-sm font-medium">Dashboard</Link>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                                <span className="text-sm font-medium">Music</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                                <span className="text-sm font-medium">Drink</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                                <span className="text-sm font-medium">Shopping</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                                <span className="text-sm font-medium">Chat</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
                                <span className="text-sm font-medium">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
                                <span className="text-sm font-medium">Notifications</span>
                                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                                <span className="text-sm font-medium">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full'>
                {children}
            </div>



        </div>
    )
}

export default Sidebar