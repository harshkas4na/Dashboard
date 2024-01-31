import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change=(args)=>{
  document.getElementById('preview').style.backgroundColor=args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="ColorPicker"/>
        
        <div className='text-center'>
        <div id='preview' className=''/>
        <div className='flex items-center justify-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>
            Inline Pallete
            </p>
                <ColorPickerComponent
                  id='inline-Pallete'
                  mode='Palette'
                  modeSwitcher={false}
                  inline
                  change={change}
                  showButtons={false}
                />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>
            Inline Picker
            </p>
                <ColorPickerComponent
                  id='inline-Pallete'
                  mode='Picker'
                  modeSwitcher={false}
                  inline
                  change={change}
                  showButtons={false}
                />
          </div>
        </div>

        </div>
        
      </div>
    
  )
}

export default ColorPicker