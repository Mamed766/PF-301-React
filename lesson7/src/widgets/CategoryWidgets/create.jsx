import React from 'react'
import CustomInput from '../../components/CustomInput'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { createCategory } from '../../services/api'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { mutate } from 'swr'

const CreateCategory = ({ setOpenModal }) => {
    const [loading, setIsloaing] = React.useState(false)


    const ValidateSchema = Yup.object().shape({
        category: Yup.string().required('category is required').min(3, 'category must be at least 3 characters').max(20, 'category must be at most 20 characters'),
        createdBy: Yup.string().required('created by is required').min(3, 'created by must be at least 3 characters').max(20, 'created by must be at most 20 characters'),
        startDate: Yup.date().required('start date is required').test("start data", "start date must be less than end date", function (value) {
            return new Date(value) < new Date(this.parent.endDate)
        }),

        endDate: Yup.date().required('end date is required')
    })
    const formik = useFormik({
        initialValues: {
            category: '',
            createdBy: '',
            startDate: '',
            endDate: ''
        },
        validationSchema: ValidateSchema,
        onSubmit: async values => {
            setIsloaing(true)
            await createCategory(values).then((res) => {
                if (res.status === 201) {
                    formik.resetForm()
                    toast.success('category added successfully')
                    setIsloaing(false)
                    setOpenModal(false)
                    mutate('http://localhost:3001/category')
                }
            })
        }
    })


    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                formik.handleSubmit()
            }}
            className='w-[500px] min-h-[200px] p-4'>
            <div className='flex flex-col gap-4'>
                <CustomInput
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    pleaceholder="please add category" type="text" />
                {
                    formik.touched.category && formik.errors.category ? <p className='text-red-500'>{formik.errors.category}</p> : null
                }
                <CustomInput
                    name="createdBy"
                    onChange={formik.handleChange}
                    value={formik.values.createdBy}
                    pleaceholder="please add  created by" type="text" />
                {
                    formik.touched.createdBy && formik.errors.createdBy ? <p className='text-red-500'>{formik.errors.createdBy}</p> : null
                }
                <CustomInput
                    name="startDate"
                    onChange={formik.handleChange}
                    value={formik.values.startDate}
                    pleaceholder="please add start Date" type="date" />
                {
                    formik.touched.startDate && formik.errors.startDate ? <p className='text-red-500'>{formik.errors.startDate}</p> : null
                }
                <CustomInput
                    name="endDate"
                    onChange={formik.handleChange}
                    value={formik.values.endDate}
                    pleaceholder="please add End  Date" type="date" />
                {
                    formik.touched.endDate && formik.errors.endDate ? <p className='text-red-500'>{formik.errors.endDate}</p> : null
                }
                <button
                    disabled={loading || formik.isValidating}

                    type='submit' className='primary_btn'>
                    {
                        loading ? <Spinner /> : 'Submit'
                    }
                </button>
            </div>

        </form>
    )
}

export default CreateCategory