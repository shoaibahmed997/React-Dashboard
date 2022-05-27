import React from 'react'
import Chart from 'react-apexcharts'
import Heading from './Heading'
import {FiBarChart2} from 'react-icons/fi'

const RangeBar = () => {
    let series= [{
                name: 'Recieved Amount',
                data: [
                  {
                    x: 'Fri',
                    y: [
                     100,200
                    ]
                  },
                  {
                    x: 'Thr',
                    y: [
                      300,350
                    ]
                  },
                  {
                    x: 'Wed',
                    y: [
                      100,150
                    ]
                  },
                  {
                    x: 'Tue',
                    y: [
                     300,350
                    ]
                  },
                  {
                    x: 'Mon',
                    y: [
                     200,430
                    ]
                  },
                ]
              },{
                name: 'Transfered Amount',
                data: [
                  {
                    x: 'Fri',
                    y: [
                     60,150
                    ]
                  },
                  {
                    x: 'Thr',
                    y: [
                      200,350
                    ]
                  },
                  {
                    x: 'Wed',
                    y: [
                      50,150
                    ]
                  },
                  {
                    x: 'Tue',
                    y: [
                     300,350
                    ]
                  },
                  {
                    x: 'Mon',
                    y: [
                     200,230
                    ]
                  },
                ]
              },]

      let options = {
          title:{
              text:"Payment History",
              offsetX:30,
              style:{
                  fontWeight:"bold",
                  color:"#313768",
                  fontFamily:"poppins",
              }
          },
          
        chart: {
          height: 200,
          type: 'rangeBar',
        },
       colors:['#71a350', '#fcbc81'],
        plotOptions: {
          bar: {
            horizontal: true,
           }
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        stroke:{
            colors:[],
            show:false,
            curve:"smooth"
        },
        xaxis: {
          type: 'category'
        },
        legend: {
          position: 'bottom'
        }
      }


  return (
    <div className='mt-4 grid grid-cols-[1.5fr_1fr]'>
        <div className='p-2 rounded-md '>
            <Chart type='rangeBar' series={series} options={options}  />
        </div>
        <div  className='p-4 rounded-md'>
            <Heading title={"Project Invoices"} />
            <div className='mt-4 flex flex-col gap-6'>
                <div className='flex items-center gap-4 rounded-bl-3xl overflow-hidden  rounded-sm bg-white drop-shadow-lg hover:scale-[.9] transition-all hover:cursor-pointer ' >
                    <div className=' h-20  bg-primary-purple-light '>
                        <img src="/designproject.png" alt="" height='80%' width='90%' />    
                    </div>
                    <div>
                        <h1 className=' text-xs text-slate-400'>Design project</h1>
                        <h1 className='text-lg text-primary-heading font-extrabold'>$2,406</h1>
                    </div>
                    <FiBarChart2 fontSize='40px' className='text-slate-400' />
                </div>
                <div className='flex items-center gap-4 rounded-bl-3xl overflow-hidden  rounded-sm bg-white drop-shadow-lg hover:scale-[.9] transition-all hover:cursor-pointer ' >
                    <div className=' h-20  bg-primary-orange-dark '>
                        <img src="/codeproject.png" alt="" height='80%' width='90%' />    
                    </div>
                    <div>
                        <h1 className=' text-xs text-slate-400'>Design project</h1>
                        <h1 className='text-lg text-primary-heading font-extrabold'>$4,950</h1>
                    </div>
                    <FiBarChart2 fontSize='40px' className='text-slate-400' />
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default RangeBar