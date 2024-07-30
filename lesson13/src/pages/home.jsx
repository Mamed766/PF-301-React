import React, { useEffect, useState } from 'react'
import { UserService, } from '../services/api'

const HomePage = () => {
    const [data, setData] = useState([])
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const user = new UserService()

    const handleSearch = (payload) => {
        user.getUsers(payload).then((res) => setData(res.data))

    }
    useEffect(() => {
        user.getUsers({}).then((res) => setData(res.data))
    }, [])
    return (
        <div className='mx-4'>
            <div className='flex items-stretch gap-3'>
                <input
                    className='border border-solid border-gray-300 p-3 outline-none'
                    placeholder='username'
                    type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <input
                    placeholder='email'
                    className='border border-solid border-gray-300 p-3 outline-none'
                    type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button
                    onClick={() => handleSearch({ username, email })}
                    className='bg-blue-500 rounded-lg px-4 py-2 text-white'>
                    Search
                </button>
            </div>
            <div className='flex items-stretch gap-4 flex-wrap my-5'>  {
                data.map((item, index) => (
                    <div className='max-w-[200px] w-full rounded-md shadow-md min-h-[100px]' key={index}>
                        <h1>{item.username}</h1>
                        <h1>{item.email}</h1>
                    </div>
                ))
            }</div>
        </div>
    )
}

export default HomePage