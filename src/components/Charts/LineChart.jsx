import React from 'react'
import { Category, ChartComponent,SeriesCollectionDirective ,DataLabel, LineSeries,DateTime, Legend,SeriesDirective, Tooltip, Inject } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis } from '../../data/dummy';

const LineChart = () => {
  return (
    <div>
        <ChartComponent 
          id='charts'
          height='420px'
          primaryXAxis={LinePrimaryXAxis}
          primaryYAxis={LinePrimaryYAxis}
          chartArea={{border:{width:0}}}
          tooltip={{enable:true}}
          // background={currentMode==='Dark'?'#33373E':'#fff'}
        >
          <Inject services={[LineSeries, Legend, Tooltip, DateTime]}/>
          <SeriesCollectionDirective>
            {lineCustomSeries.map((item,index)=>(
              <SeriesDirective key={index} {...item}/>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
    </div>
  )
}

export default LineChart