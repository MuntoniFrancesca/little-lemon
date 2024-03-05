import React from 'react'
import cards from '../cards';

function Menu() {
    const handleOrder = (id) => {
        console.log(id, "id is clicked");
    }

    
    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This weeks specials!</h2>
                <button>Order Menu</button>
            </div>
            {/* cards */}
            <div className='cards'>
                {
                    cards.map(card => <div key={card.id} className='menu-items'>
                        <img src={card.image} alt='' />
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{card.title}</h5>
                                <p>{card.price}</p>
                            </div>
                            <p>{card.description}</p>
                            <button className='orderBtn' onClick={() => handleOrder(card.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Menu;