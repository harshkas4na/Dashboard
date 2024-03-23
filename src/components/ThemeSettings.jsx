import React from 'react'
import {MdOutlineCancel} from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {themeColors} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  
  const {setColor,setMode,currentMode,currentColor,setThemeSettings}=useStateContext();
  
  return (
    <div className='w-screen  bg-half-transparent top-0 right-0 nav-item fixed'>
      <div className='h-screen bg-white dark:bg-main-dark-bg dark:text-white w-400 float-right dark:[#484B52]'>

      <div className='flex-row '>
        <div className='flex justify-between ml-4 p-4 items-center'>
        <p className='text-lg font-semibold'> 
          settings
        </p>
        <button 
         type='button'
         onClick={()=>setThemeSettings(false)}
         style={{color:'rgb(153,171,180)',borderRadius:'50%'}}
         className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
        >
          <MdOutlineCancel/>  
        </button>
        </div>
        <hr />
        <div className='p-4  '>
          <p className='font-semibold text-lg'>Theme Options</p>
          <form className='flex-row ml-4'>
            <div className='my-3 '>
              <input
               type="radio"
              
               className='cursor-pointer'
               value="Light"
               onChange={setMode}
               checked={currentMode==='Light'}
              /> Light
            </div> 
            <div className=''>
              <input type="radio"
               value="Dark"
               onChange={setMode}
               className='cursor-pointer'
               checked={currentMode==='Dark'}
              /> Dark
            </div> 
             
          </form>
        </div>
        <hr />
        <div className='p-4'>
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3'>
            {themeColors.map((item,index)=>(
              <TooltipComponent key={index}
              content={item.name}
              position='TopCenter'
              >
                <div style={{backgroundColor:item.color}}
                className='relative mt-2 cursor-pointer flex gap-5 items-center rounded-full'
                
                >
                  <button className='h-10 w-10  cursor-pointer rounded-full'
                  style={{backgroundColor:item.color}}
                  onClick={()=>setColor(item.color)}
                  >
                    <BsCheck 
                      className={`ml-2 text-2xl text-white ${currentColor===item.color?'block':'hidden'}`}
                    />
                  </button>
                </div>

              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ThemeSettings