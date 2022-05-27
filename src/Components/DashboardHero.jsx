import React from 'react'
import Chart from "react-apexcharts";
import {AiOutlineArrowRight} from 'react-icons/ai'

let series = [
    {
      name: "Income",
      data: [6.541,10.981,8.654,9.813,5.23,6.851,8.772,9.891,11.132,6.7,9.632,8.209]
    }
  ]

let options = {
chart: {
    height: 280,
    type: "area",
    background:'#f8f8fb',
    
},
colors :['#71a350'],
stroke:{
    width:2,
    curve:'straight'
},

dataLabels: {
    enabled: false
    
},
fill: {
    type: "gradient",
    gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.7,
    opacityTo: 0.9,
    stops: [0, 90, 100]
    }
},

xaxis: {
    categories: [
    "JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC",
    ],
   
    labels:{
        style:{
            fontWeight : 600,
        }
    }
},
tooltip:{
    enabled:true,
    y: {
        formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
            return "$"+value+'K'
          },
    },
},
yaxis:{
    labels:{
        style:{
            colors: ['#313768'],
            fontWeight : 800
        }
    },
    min:0,
    forceNiceScale:true
}
};

const DashboardHero = () => {
   

  return (
    <div className=' grid grid-cols-[4fr_1fr] h-64 gap-2 '>
        <div>
            <Chart type='area' height='100%' options={options} series={series} />
        </div>
            <div className='px-2 hover:cursor-pointer transition-all hover:scale-[.95] hover:border-primary-purple-light my-auto border-2 rounded-lg border-primary-green-dark bg-primary-green-light  w-full h-4/3'>
                <img className='mt-4' src="/invoice.png" height='400px' width='600px' alt="" />
                <h1 className='text-primary-green-dark font-semibold'>Manage Your <span className='font-bold underline underline-offset-1 '>Invoice</span></h1>
                <div>

                <h1 className='mt-2 text-white'> See Details <AiOutlineArrowRight fontSize='20px' /> </h1>
                </div>
            </div>
    </div>
  )
}

export default DashboardHero