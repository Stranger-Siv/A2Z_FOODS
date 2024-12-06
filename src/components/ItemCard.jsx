import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast'


const ItemCard = ({id, name, price, qty, img}) => {

    const dispatch = useDispatch()

    return (
        <div className='flex gap-2 shadow-md rounded-lg p-2 nb-3'>
            <MdDelete 
            onClick={()=> { 
                dispatch(removeFromCart({id, name, img, qty, price}))
                toast(`${name} Removed!`, {
                    icon: "👋"
                })
                }} className='absolute right-7 text-gray-600 cursor-pointer hover:text-red-500'/>

            <img src={img} alt='' className='w-[50px] h-[50px]'></img>
            <div className='leading-5'>
                <h2 className='font-bold text-gray-800'>{name}</h2>
                <div className='flex justify-between mt-1'>
                    <span className='text-red-500 font-bold'>₹ {price}</span>
                    <div className='flex justify-center items-center gap-2 absolute right-7'>
                        <AiOutlineMinus onClick={()=> qty > 1 ? dispatch(decrementQty({id})) : (qty = 0)} className='border-2 border-gray-600 text-gray-600 hover:text-white p-1 hover:bg-red-500 hover:border-none rounded-md text-xl transition-all ease-linear cursor-pointer' />
                        <span>{qty}</span>
                        <AiOutlinePlus onClick={()=> qty >= 1 ? dispatch(incrementQty({id})) : (qty = 0)} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemCard