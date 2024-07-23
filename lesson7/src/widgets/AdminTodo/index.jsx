import React, { Suspense, useState } from 'react'
import CustomInput from '../../components/CustomInput'
import useSWR, { mutate } from 'swr'
import { createAdminBlog } from '../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'



const AdminTodoController = () => {
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(false)
    const [formfields, setFormFields] = useState({
        title: '',
        description: '',
        content: '',
        author: '',
        date: '',
        file: '',
        status: "PENDING"
    })
    const handleChange = (e) => {
        if (e.target.name === "file") {
            const file = new FileReader()
            file.readAsDataURL(e.target.files[0])
            file.onload = (ev) => {
                setFormFields({ ...formfields, file: ev.target.result })
            }
        }
        else {
            setFormFields({ ...formfields, [e.target.name]: e.target.value })
        }

    }
    const handleSubmoit = (e) => {
        e.preventDefault()
        setIsloading(true)
        createAdminBlog(formfields).then((res) => {
            if (res.status === 201) {
                mutate('http://localhost:3001/homeblogs')
                toast.success('Blog added successfully')

                Object.entries(formfields).forEach(([key, value]) => {
                    setFormFields({ ...formfields, [key]: '' })
                })
                setIsloading(false)
                navigate("/")

            }
        })

    }

    const BlogTypesStatus = [{
        id: 1,
        name: 'Pending',
        value: "PENDING"
    },
    {
        id: 2,
        name: 'Approved',
        value: "APPROVED"
    },
    {
        id: 3,
        name: 'Rejected',
        value: "REJECTED"
    }]
    return (
        <div>
            <h1 className='flex justify-center items-center text-2xl font-medium'>Create Blog</h1>

            <form className='flex flex-col gap-3'>
                <CustomInput
                    value={formfields.title}
                    onChange={handleChange}
                    name="title" pleaceholder='Enter title' />
                <CustomInput
                    value={formfields.description}
                    onChange={handleChange}
                    name="description" pleaceholder='Enter description' />
                <CustomInput
                    value={formfields.content}
                    onChange={handleChange}
                    name="content" pleaceholder='Enter content' />
                <CustomInput
                    value={formfields.author}
                    onChange={handleChange}
                    name="author" pleaceholder='Enter author' />
                <CustomInput
                    value={formfields.date}
                    onChange={handleChange}
                    name="date" type="date" pleaceholder='Enter date' />
                <CustomInput
                    onChange={handleChange}
                    name="file" type={"file"} />
                <select
                    onChange={handleChange}
                    name='status'
                    className='base_input'>
                    {
                        BlogTypesStatus.map((status) => (
                            <option value={status.value}>{status.name}</option>
                        ))
                    }

                </select>
                <button
                    disabled={isLoading}
                    onClick={handleSubmoit}
                    className='primary_btn'>
                    {
                        isLoading ? <Spinner /> : "Submit"
                    }
                </button>
            </form>
        </div>
    )
}


export default function AdminTOdoWidget() {
    return (
        <Suspense>
            <AdminTodoController />
        </Suspense>
    )
}