import React from 'react'
import { ScheduleComponent,ViewsDirective,ViewDirective,Resize,DragAndDrop, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
import {DatePickerComponent} from "@syncfusion/ej2-react-calendars"
import {scheduleData} from "../data/dummy"
import { Header } from '../components';

const Kanban = () => {
  return (
    <div>
      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar"/>
      <ScheduleComponent
      height={"660px"}
        eventSettings={{dataSource:scheduleData}}
        selectedDate={new Date(2021,0,10)}
      >
          {/* <ViewsDirective>
            
          </ViewsDirective> */}
          <Inject services={[Day, Week, WorkWeek, Month, Agenda,Resize,DragAndDrop]}/>
      </ScheduleComponent>
    </div>
      </div>
  )
}

export default Kanban