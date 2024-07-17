import React from 'react'
import BaseCard from '../../components/BaseCard'
import { cardDb } from '../../static/mockdb'

const ContactPage = () => {
    return (
        <div className="container">
            <h1>
                Welcome to the Contact
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

export default ContactPage