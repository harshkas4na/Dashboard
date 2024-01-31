import React from 'react'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort,Resize,ContextMenu,ExcelExport,PdfExport,Edit } from '@syncfusion/ej2-react-grids';
import {ordersGrid,ordersData} from "../data/dummy"
import { Header } from '../components';


const Orders = () => {
  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"/>
      <GridComponent
       dataSource={ordersData}
       allowPaging
       allowSorting
      >
        <ColumnsDirective>
            {ordersGrid.map((item,index)=>(
              <ColumnDirective key={index} {...item}/>
            ))}
        </ColumnsDirective>
        <Inject services={[Page,ExcelExport,Sort,Resize,ContextMenu,Filter,Edit,PdfExport]}/>
      </GridComponent>
      </div>

    </div>
  )
}

export default Orders