import React from 'react'

import {MdOutlineCancel} from 'react-icons/md';
import {cartData} from "../data/dummy"



const Cart = () => {
  
  return (
    <div className='w-screen  bg-half-transparent top-0 right-0 nav-item fixed'>
      <div className='h-screen bg-white dark:text-gray-200 w-400 float-right dark:[#484B52]'>
        <div className='flex justify-between ml-4 p-4 items-center'>
          <p className='text-lg font-semibold'> 
            Shopping Cart
          </p>
          <button 
          type='button'
          onClick={()=>{}}
          style={{color:'rgb(153,171,180)',borderRadius:'50%'}}
          className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
          >
            <MdOutlineCancel/>  
          </button>
          </div>

          {
            cartData.map((item,index)=>(
              <>
              <div key={index} className="flex gap-4 my-4 mx-12 items-center">
                <img src={item.image} className="h-20 w-20"/>
                <div>
                  <h1 className="font-semibold text-sm">{item.name}</h1>
                  <p className="text-sm text-gray-500 font-semibold">{item.category}</p>
                  <div className="flex gap-5 items-center">
                    <span className=" font-semibold">{item.price}</span>
                    <div>
                      <button className="border w-5 ">-</button>
                      <button className="border w-5 cursor-text">0</button>
                      <button className="border w-5 ">+</button>
                    </div>
                  </div>
                </div>
              </div>
                <hr className="w-[80%] ml-8" />
                </>
            ))

          }
          <div className="flex mx-12 my-4 justify-between items-center">
            <span className="text-gray-400 font-semibold">Sub Total</span>
            <span >$890</span>
          </div>
          <div className="flex mx-12 justify-between items-center">
            <span className="text-gray-400 font-semibold">Total</span>
            <span >$890</span>
          </div>

          <button className='w-[80%]  ml-10 my-4 text-white text-sm   rounded-[5px] py-3 px-4'
           style={{backgroundColor:'blue'}}
           >
            Place Order
            </button>
      
      </div>
    </div>
  )
}

export default Cart