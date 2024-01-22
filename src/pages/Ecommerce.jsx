import { BsCurrencyDollar } from "react-icons/bs"
import {GoDotFill} from 'react-icons/go';
import {Stacked,Pie,Button,SparkLine} from '../components'
import { earningData,SparklineAreaData,ecomPieChartData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const {activeMenu}=useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full ${activeMenu?"lg:w-[90%]":"lg:w-[75%]"}  p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center`}>
            <div className="flex-row justify-between items-center">
              <div>
                <p className="font-bold text-gray-400 ">Earnings</p>
                <p className="text-2xl"> $63,448.78</p>
              </div>

              <div className="mt-6">
                <Button
                  color='white'
                  bgColor='blue'
                  text='Download'
                  borderRadius='10px'
                  size='md'
                />
              </div>
            </div>
        </div>
        </div>
      
      <div className="flex m-3  flex-wrap justify-center gap-1 items-center">
        {earningData.map((item)=>(
          <div
            key={item.title}
            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
          >
              <button className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              style={{backgroundColor:item.iconColor}}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                    {item.amount}
                </span>
                <span className={`text-sm text-[${item.pcColor}]`}>
                  {item.percentage}
                </span>

              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
          </div>
        ))}
      </div>
      {/* whole revenue section */}
      <div className="gap-10 lg:w-[90%] lg:mx-[90px] ">
        {/* revenue expense budget dot */}
        {/* <div className="flex justify-between bg-white dark:bg-secondary-dark-bg dark:text-gray-200 m-3 rounded-2xl md:w-780 ">
          
          
        </div> */}
          {/* flex div for left right part */}
        <div className="m-12 flex flex-wrap justify-between gap-10 ">
          {/* left part */}
          <div className="border-r-1 border-color m-4 pr-10 ">
          <p className="text-xl font-semibold  pb-12 mt-[-12px]">Revenue Updates</p>
            {/* 93 div */}
            <div>
            <p className="text-3xl font-semibold"> $93,438 <span className="text-xs bg-green-400 rounded-[20px] ml-3 p-1">23%</span></p>
            
            <p className=" text-gray-500 mt-1 text-sm">Budget</p>
            </div>
            {/* 48 div */}
            <div className="mt-8">
            <p className="text-2xl font-semi-bold"> $48,487</p>
            <p className=" text-gray-500 mt-1 text-sm">Expense</p>
            </div>
            {/* line chart div */}
            <div className="mt-5 ">
              
              <SparkLine
              currentColor='blue'
              id='line-sparkline'
              type='Line'
              height='80px'
              width='250px'
              data={SparklineAreaData}
              color='blue'
              />
            </div>
          </div>
          {/* right part */}
          <div>
          <div className="flex gap-4 mb-12">
            <span className="flex items-center"><GoDotFill/> Expense</span>
            <span className="flex items-center text-green-600"><GoDotFill/> Budget</span>
          </div>

            <Stacked
            width='320px'
            height='360px'
            />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Ecommerce