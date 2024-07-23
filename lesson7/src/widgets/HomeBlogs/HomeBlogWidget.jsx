import React, { Suspense, useState } from 'react'
import useSWR, { mutate } from "swr";
import { deleteAdminBlog, fetcher } from '../../services/api';
import Spinner from '../../components/Spinner';
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import CustomModal from '../../components/CustomModal';
import CreateCategory from '../CategoryWidgets/create';
import CategoryWidget from '../CategoryWidgets';
import { Link } from 'react-router-dom';
import { CheckStatusWithType, ensuresArray } from '../../utils/helper';
import clsx from 'clsx';


const HomeBlogsContainer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { data, isLoading } = useSWR("http://localhost:3001/homeblogs", fetcher)
    const [deleteLoadingById, setDeleteLoadingById] = useState(true)
    const handleDeleteBlogById = (id) => {
        setDeleteLoadingById((prev) => ({ ...prev, [id]: true }))
        deleteAdminBlog(id).then((res) => {
            if (res.status === 200) {
                mutate("http://localhost:3001/homeblogs")
                toast.success('Blog deleted successfully')
                setDeleteLoadingById((prev) => ({ ...prev, [id]: false }))
            }
        })

    }

    return (
        <div>
            <h1 className='text-2xl font-bold'>Blogs</h1>
            <button className='primary_btn' onClick={() => setIsOpen(true)}>Add Category</button>

            <CustomModal
                title='Add Category'
                open={isOpen}
                setOpen={setIsOpen}
                onClose={() => setIsOpen(false)}
            >
                <CreateCategory
                    setOpenModal={() => setIsOpen(false)}
                />
            </CustomModal>
            {
                isLoading ? <Spinner /> : (
                    <div className='flex flex-row justify-start  flex-wrap gap-5 items-stretch'>
                        {ensuresArray(data) && data.map((blog) => (
                            <div key={blog.id} className='border rounded-md p-3 my-3 w-[300px] items-stretch'>
                                <button className={clsx('rounded-md px-2 py-1', CheckStatusWithType(blog.status))}>{blog.status || "Offline"}</button>
                                <div className='flex justify-end'>
                                    <button
                                        onClick={() => {
                                            handleDeleteBlogById(blog.id)
                                        }}
                                        className='warning_btn'>
                                        {
                                            deleteLoadingById[blog.id] ? <Spinner /> : <FaTrashAlt />
                                        }
                                    </button>
                                </div>
                                <h1 className='text-xl font-bold'>{blog.title}</h1>
                                <p>{blog.description}</p>
                                <p>{blog.author}</p>
                                <p>{blog.date}</p>

                                <Link to={`blog/${blog?.id}`}>
                                    <img
                                        className='w-full object-cover h-[200px] rounded-lg'
                                        src={blog.file ? blog.file : "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"} alt={blog.title} />
                                </Link>


                            </div>))}
                    </div>
                )
            }
        </div >
    )
}


export default function HomeBlogsWidget() {
    return (
        <Suspense>
            <CategoryWidget />
            <HomeBlogsContainer />
        </Suspense>
    )
}