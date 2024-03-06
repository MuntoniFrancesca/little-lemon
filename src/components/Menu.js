import React from 'react'
import Swal from 'sweetalert2';
import cards from '../cards';


function Menu() {
    const handleOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been placed.",
                icon: "success"
              });
            }
          });
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
                        <img src={card.image} alt='picture of dish' />
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