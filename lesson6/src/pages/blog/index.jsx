import React from 'react'
import { cardDb } from '../../static/mockdb'
import BaseCard from '../../components/BaseCard'

const BlogPage = () => {
    return (
        <div className="container">
            <h1 className='text-4xl text-red-300'>
                Welcome  to the Blog
            </h1>
            {cardDb &&
                cardDb.map((card, index) => (
                    <BaseCard
                        key={index}
                        title={card.title}
                        img={card.image}
                        price={card.price}
                        desc={card.description}
                    />
                ))}
        </div>
    )
}

export default BlogPage