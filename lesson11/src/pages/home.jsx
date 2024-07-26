import React, { useContext, useState } from 'react';
import { LigtOrDarContext } from '../context/LigthOrDarkMoodContext';
import Card from '../componnets/Card';

const HomePage = () => {
    const { bgColor } = useContext(LigtOrDarContext);
    const [cardColors, setCardColors] = useState({});
    const [selectedId, setSelectedId] = useState(null);

    const CardData = [
        { id: 500, name: 'Card1' },
        { id: 400, name: 'Card2' },
        { id: 300, name: 'Card3' },
        { id: 900, name: 'Card4' },
        { id: 200, name: 'Card5' },
        { id: 100, name: 'Card6' },
        { id: 700, name: 'Card7' },
        { id: 800, name: 'Card8' },
    ];

    const handleAddBgColorById = (id) => {
        setCardColors(prevColors => ({
            ...prevColors,
            [id]: bgColor 
        }));
    };
    const handleSelectId = (id) => {
        setSelectedId(id);
    }


    return (
        <div className='flex flex-wrap items-stretch gap-5'>
            {
                CardData.map((card) => (
                    <Card
                        key={card.id}
                        onClick={() => handleSelectId(card.id)}
                        className={
                            selectedId === card.id
                                ? 'bg-blue-500'
                                : cardColors[card.id]
                        }
                        name={card.name}
                    />
                ))
            }
        </div>
    );
};

export default HomePage;
