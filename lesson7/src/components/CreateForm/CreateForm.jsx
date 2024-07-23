import React, { useState } from 'react'
import CustomInput from '../CustomInput'
import Spinner from '../Spinner'
import { toast } from 'react-toastify'
import { createBlog } from '../../services/api'

const CreateForm = ({ setCloseModal }) => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        surname: '',
        email: '',
        createAt: ''
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const hanleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        createBlog(form).then((res) => {
            if (res.status === 201) {
                toast.success('Blog added successfully')
                setLoading(false)
                setCloseModal(false)

            }
        })
    }


    return (
        <form
            onSubmit={hanleSubmit}
            className='flex flex-col gap-3'>
            <CustomInput onChange={handleChange} value={form.name} name="name" type="text" pleaceholder="Enter name" />
            <CustomInput
                onChange={handleChange}
                value={form.surname}
                name="surname" type="text" pleaceholder="Enter surname" />
            <CustomInput
                onChange={handleChange}
                value={form.email}
                name="email" type="email" label="Title" pleaceholder="Enter email" />
            <CustomInput
                onChange={handleChange}
                value={form.createAt}
                name="createAt" type="date" label="createAt" showLabel={true} />

            <button
                type='submit'
                disabled={loading}
                className='primary_btn'>
                {
                    loading && <Spinner />
                }
                Submit

            </button>

        </form>
    )
}

export default CreateForm