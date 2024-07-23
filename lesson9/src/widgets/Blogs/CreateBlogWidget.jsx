import React, { Suspense, useState } from 'react'
import CustomInput from '../../components/CustomInput'
import useSWR, { mutate } from 'swr'
import { createBlogs } from '../../services/api'
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner'
import { useNavigate } from 'react-router-dom'

const CreateFormBlogWrapper = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        title: '',
        imgTitle: '',
        price: 0,
        avarage: 0,
        count: 0,
        inStock: true,
        imgUrl: ''
    })
    const handleChange = (e) => {
        if (e.target.type === 'file') {
            const reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])
            reader.onload = () => {
                setForm({ ...form, imgUrl: reader.result })
            }
        }
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const payload = {
            title: form.title,
            imgTitle: form.imgTitle,
            price: form.price,
            avarage: form.avarage,
            count: form.count,
            inStock: form.inStock === 'true' ? true : false,
            imgUrl: form.imgUrl
        }
        createBlogs(payload).then((res) => {
            mutate('http://localhost:3002/blogs')
            toast.success('Blog created successfully')
            navigate('/dashboard')
            setLoading(false)
            Object.keys(form).forEach((key) => {
                setForm({ ...form, [key]: '' })
            })
        }
        )

    }


    return (
        <form className='my-20 flex flex-wrap flex-col gap-2 max-w-5xl mx-auto '>
            <CustomInput
                onChange={handleChange}
                value={form.title}
                pleaceholder="enter the title"
                type="text" id="title"
                name="title" />
            <CustomInput
                onChange={handleChange}
                value={form.imgTitle}
                pleaceholder="enter the imgTitle"
                type="text"
                id="imgTitle"
                name="imgTitle" />
            <CustomInput
                onChange={handleChange}
                value={form.price}
                pleaceholder="enter the price"
                type="number"
                id="price"
                name="price" />
            <CustomInput
                onChange={handleChange}
                value={form.avarage}
                pleaceholder="enter the avarage"
                type="number"
                id="avarage"
                name="avarage" />
            <CustomInput
                onChange={handleChange}
                value={form.count}
                pleaceholder="enter the Star count"
                type="number"
                id="count"
                name="count" />
            <select
                className='base_input'
                onChange={handleChange}
                value={form.inStock}
                name="inStock" id="inStock">
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
            </select>
            <CustomInput
                onChange={handleChange}
                type="file" name="imgUrl" id="imgUrl" />
            <button
                onClick={handleSubmit}
                className='primary-btn'>
                {loading ? <Spinner /> : 'Create Blog'}
            </button>

        </form>
    )
}

export default function CreateFormBlogWidget() {
    return (
        <Suspense>
            <CreateFormBlogWrapper />
        </Suspense>)
}