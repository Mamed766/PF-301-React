import React from 'react'
import { cardDb } from '../../static/mockdb'
import BaseCard from '../../components/BaseCard'

const HomePage = () => {
    return (
        <div className="container">
            <h1>
                Welcome to the Home
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

export default HomePage