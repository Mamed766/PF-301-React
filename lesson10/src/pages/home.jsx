import React, { useState } from 'react'
import { useFetcherHook } from '../hook/useFetcher'

const HomePage = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])
    const [useName, setUserName] = useState('')
    const { data: todoData, loading: todoIsloading, error: todoIsError } = useFetcherHook("https://jsonplaceholder.typicode.com/todos")
    const { data: AlbumsData, loading: AlbumIsLoading, error: AlbumIsError } = useFetcherHook("https://jsonplaceholder.typicode.com/albums")

    const Increment = () => {
        setCount(prev => prev + 1)
    }
    const Decrement = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
        }
    }
    const handleResetCount = () => { setCount(0) }
    const handleAddNewUser = () => {
        setUserName('')
        setUsers([...users, useName])
    }
    const handleChange = (e) => {
        setUserName(e.target.value)
    }







    return (
        <div className="max-w-[1440px] mx-auto">
            <div className='border border-solid rounded-md shadow-md p-4 max-w-[600px] w-full min-h-[200px] mx-auto my-5'>
                <div className='flex gap-4 items-center my-3'>
                    {
                        todoIsloading ? <h1>Loading...</h1> : ""
                    }
                    {
                        todoIsError ? <h1 className='bg-red-100 text-red-500 rounded-md p-3'>{todoIsError}</h1> : ""
                    }

                    <button onClick={Increment} className='btn'>+</button>
                    <h1 className='text-center text-2xl'>{count}</h1>
                    <button onClick={Decrement} className='btn'>-</button>
                    <button
                        onClick={handleResetCount}
                        className='btn'>Reset</button>


                </div>
                <div className='flex items-stretch gap-2'>
                    <input type="text"
                        name="username"
                        value={useName}
                        onChange={handleChange}
                        className='baseInput' />
                    <button onClick={handleAddNewUser} className='btn'>Add User</button>

                </div>


                {
                    users.map((user, index) => (
                        <h3 key={index}>{user}</h3>
                    ))
                }
            </div>
            {
                todoData.slice(0, 5).map((todo, index) => (
                    <div key={index} className='border border-solid rounded-md shadow-md p-4 max-w-[600px] w-full min-h-[200px] mx-auto my-5'>
                        <h1>{todo.title}</h1>
                        <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                    </div>
                ))
            }

            {
                AlbumsData.slice(0, 2).map((album, index) => (
                    <div key={index} className='border border-solid rounded-md shadow-md p-4 max-w-[600px] w-full min-h-[200px] mx-auto my-5'>
                        <h1>{album.title}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default HomePage