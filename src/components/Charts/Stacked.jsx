import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries,stackedPrimaryXAxis,stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({width,height}) => {
  return (
    <ChartComponent id='stack charts' 
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis} 
    width={width}
    height={height}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    legendSettings={{background:"white"}}
    >
      <Inject
       services={[Legend,Category,StackingColumnSeries,Tooltip,DataLabel]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=>(
        <SeriesDirective
          key={index}
          {...item}
        />))
        }
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked