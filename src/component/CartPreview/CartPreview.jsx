import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareMinus, faSquarePlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const CartPreview = ({cart, increaseProduct,decreaseProduct,deleteProduct}) => {

    return (
        <div className='m-32'>
            {
                cart.map(item => <CartItem key={item.id} item={item} increaseProduct={increaseProduct} decreaseProduct={decreaseProduct} deleteProduct={deleteProduct}></CartItem>)
            }
        </div>
    );
};

const CartItem = ({item, increaseProduct,decreaseProduct,deleteProduct}) => {
   
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('productCount')));

    return (
        <div className='w-4/6 flex m-5 p-2 border-solid border-2 border-gray-400 '>
            
            <img src={item.img} alt="" className='h-32 mr-3' />
            <div className='flex pt-2 justify-between size-5/6'>
                <div>
                <p className='text-xl mb-2'>{item.name}</p>
                <p className="text-lg mb-2">Price: ${item.price}</p>
                <p>Shipping Charge: $5</p>
                </div>
                
                <div className='flex'>
                    <div className="quantity p-8 flex">
                    <FontAwesomeIcon icon={faSquarePlus}  className='btn h-9' onClick={() => increaseProduct(item)} />
                    <p className='text-xl px-6'>{item.quantity}</p>
                    <FontAwesomeIcon icon={faSquareMinus}   className='btn h-9' onClick={()=> decreaseProduct(item)} />
                    </div>
                <FontAwesomeIcon className='h-9 p-8' size='2xl' icon={faTrashCan} style={{color: "#f24936",}} onClick={() => deleteProduct(item)} />
                </div>
                
                
                
            </div>
            
        </div>
    );
}
export default CartPreview;