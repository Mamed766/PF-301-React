import React, { Suspense, useEffect, useState } from 'react'
import CustomModal from '../../components/CustomModal'
import CreateForm from '../../components/CreateForm/CreateForm'
import CustomSkeleton from '../../components/CustomSkeleton'
import { getBlogs } from '../../services/api'

const BlogListWrapper = () => {
    const [openModal, setOpenModal] = useState(false)
    const [data, setData] = useState([])
    const [loadingData, setLoadingData] = useState(false)
    const [closedModal, setClosedModal] = useState(false)

    useEffect(() => {
        setLoadingData(true)
        getBlogs().then((res) => { setData(res) })
        setLoadingData(false)

    }, [closedModal])
    return (
        <div className='my-5'>
            <div className='flex justify-end items-center'>
                <button
                    onClick={() => setOpenModal(true)}
                    className='primary_btn'>add new</button>
                {
                    openModal && <CustomModal
                        onClose={() => setClosedModal(true)}
                        open={openModal}
                        setOpen={setOpenModal}
                        onOpen={() => setOpenModal(true)}
                        title='Add New Blog'

                    >
                        <div className='w-[500px] p-5'>
                            <CreateForm setCloseModal={() => {
                                setClosedModal(false)
                                setOpenModal(false)
                            }} />
                        </div>
                    </CustomModal>
                }

            </div>
            <div>

                {
                    loadingData ? <CustomSkeleton /> : <div className='flex flex-wrap justify-start gap-5'>
                        {
                            data && data.map((el, index) => (
                                <div className='shadow-md w-[300px] min-h-[100px] p-5 rounded-lg'>
                                    <h1 className='text-xl font-medium'>{el.name}</h1>
                                    <h1 className='text-md font-medium'>{el.surname}</h1>
                                    <h1 className='text-md font-medium'>{el.createAt}</h1>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}


export default function BlogListWidget() {
    return (
        <Suspense fallback="loading....">
            <BlogListWrapper />
        </Suspense>
    )
}
