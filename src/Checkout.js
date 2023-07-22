import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal.js'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
    const [{basket},dispatch]=useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/HDFC10X/AP170_1500X200.jpg" alt="" />

            <div>
                <h2 className='checkout__title'>
                    Your Cart :
                </h2>

                 {/*CheckoutProduct  */}

                 
                 {basket.map(item=>(
                        <CheckoutProduct
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         rating={item.rating}
                         />
                    ))}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout