import React from 'react'
import { Header,LineChart } from '../../components'


const Line = () => {
  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
        <Header category="Chart" title="LineChart"/>
        <div className='w-full'>
          <LineChart/>
        </div>
      </div>
    </div>
  )
}

export default Line