import axios from 'axios'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"

const AboutPage = () => {
    const [searchParams] = useSearchParams()
    const [data, setData] = useState([])
    const [username, setUsername] = useState(searchParams?.get("username") || "")
    const [page, setpage] = useState(searchParams.get("_page") || 1)
    const [limit, setlimit] = useState(searchParams.get("limit") || 10)

    const searchUserFunc = (payload) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`, {
            params: payload
        }).then((res) => { setData(res.data) })
    }


    const fetchUserName = async () => {
        axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {
                _page: page,
                _limit: limit
            }
        }).then((res) => { setData(res.data) })
    }

    useEffect(() => {
        fetchUserName()
    }, [page, limit])
    return (
        <div className='max-w-[1440px] mx-auto'>AboutPage
            <input
                className='border border-solid border-gray-300 p-3 outline-none'
                type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={
                () => searchUserFunc({ username })
            }>Search</button>
            <ul className='flex flex-wrap items-stretch mx-4 gap-6'>
                {data.map((item) => (
                    <li className='border border-solid shadow-md max-w-[380px] w-full p-4 min-h-[100px] rounded-md' key={item.id}>{item.title}</li>
                ))}
            </ul>

            <ul className='flex items-center justify-center gap-3 my-5'>
                <li

                >
                    <button className=' bg-blue-500  text-white disabled:opacity-50 px-4 rounded-md py-2 disabled:cursor-not-allowed disabled:bg-gray-300' onClick={() => setpage(page - 1)} disabled={page === 1}>Prev</button>
                </li>
                {
                    Array.from({ length: data.length }, (_, i) => (
                        <li className={clsx('border border-solid rounded-lg h-12 w-12 flex items-center justify-center',
                            {
                                'bg-blue-500 text-white': page === i + 1
                            }
                        )} key={i}>
                            <button

                                onClick={() => setpage(i + 1)}>{i + 1}</button>
                        </li>
                    ))
                }
                <li>
                    {
                        data.length === limit && <button
                            className=' bg-blue-500 text-white disabled:opacity-50 px-4 rounded-md py-2 disabled:cursor-not-allowed disabled:bg-gray-300'
                            onClick={() => setpage(page + 1)} disabled={page === data.length}>Next</button>
                    }
                </li>

            </ul>

        </div>
    )
}

export default AboutPage