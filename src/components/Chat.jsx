import React from 'react'

import {MdOutlineCancel} from 'react-icons/md';
import {chatData} from '../data/dummy';




const Chat = () => {
  
  return (
    <div className='w-screen  bg-half-transparent top-0 right-0 nav-item fixed'>
      <div className='h-[460px] bg-white dark:text-gray-200 w-80 fixed right-36 top-16 dark:[#484B52] '>
          <div className='flex justify-between ml-4 p-4 items-center'>
            <p className='text-lg font-semibold'> 
            Messeges
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

          {chatData.map((item,index)=>(
            <>
            <div key={index} className='flex items-center mx-6 my-1'>
              
                <img src={item.image} className='w-10 h-10 rounded-full m-4 '/>
                <div>
                  <p className='font-semibold '>{item.message}</p>
                  <span className='text-gray-400 text-sm'>{item.desc}</span>
                  <p className='text-gray-400 text-sm'>{item.time}</p>
                </div>
            </div>
                <hr className=' mx-8 text-gray-500'/>

            </>

          ))}
           
            
           <button className='w-[90%] mx-4 my-2 text-white text-sm   rounded-[10px] py-2 px-4'
           style={{backgroundColor:'blue'}}
           >
            See all messages
            </button>
          


      
      </div>
    </div>
  )
}

export default Chat