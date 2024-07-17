import React from 'react'
import { cardDb } from '../../static/mockdb'
import BaseCard from '../../components/BaseCard'

const AboutPage = () => {
    return (
        <div className="container">
            <h1 className='text-blue-600 text-2xl font-bold'>
                Welcome to the About
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

export default AboutPage