import React from 'react'
import Heading from './Heading'
import {GrTransaction} from 'react-icons/gr'
import Chart from 'react-apexcharts'
import useBalance from '../Hooks/useBalance'
import useCurrentTransaction from '../Hooks/useCurrentTransaction'

let options = {
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
       hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
  
      dataLabels: {
        show: true,
        name: {
          // offsetY: -10,
          show: false,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val)+"%";
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
}

const TransactionDetails = () => {

    const transaction = useCurrentTransaction()
    const balance = useBalance()
    let percentage = ((transaction.amount/balance)*100).toFixed(2)
  
      if (transaction.title){    

  return (
    
     <div>
        <div className='mt-4 text-center'>
            <Heading title={"Transaction Detail"} />
        </div>
        <div className='mt-4 flex flex-col gap-4 overflow-scroll h-[40rem]'>
            <div className='mx-auto'>
                <GrTransaction fontSize='60px' />
            </div>
            <div className=' flex justify-between text-sm'>
                <h1 className=' text-black font-extrabold' >Title</h1>
                <h1 className='text-primary-heading font-semibold'>{transaction.title} </h1>
            </div>
            <div className=' flex justify-between text-sm'>
                <h1 className='text-black font-extrabold' >Amount</h1>
                <h1 className='text-primary-heading font-semibold'>${transaction.amount.toLocaleString()}</h1>
            </div>
            <div className='flex justify-between text-sm'>
                <h1 className='text-black font-extrabold' >Date</h1>
                <h1 className='text-primary-heading font-semibold'>{transaction.date} </h1>
            </div>
            <div className='flex justify-between text-sm'>
                <h1 className='text-black font-extrabold' >Category</h1>
                <h1 className='text-primary-heading font-semibold'>{transaction.category.name} </h1>
            </div>
            <div className='flex justify-between text-sm'>
                <h1 className='text-black font-extrabold' >Transaction ID</h1>
                <h1 className='text-primary-heading font-semibold'>{transaction.transaction_id} </h1>
            </div>
            <div className='flex justify-between text-sm'>
                <h1 className='text-black font-extrabold' >Currency</h1>
                <h1 className='text-primary-heading font-semibold'>USD</h1>
            </div>
            
            <div className='flex justify-between text-sm'>
                <h1 className='text-black font-extrabold' >Remark</h1>
                <h1 className='text-primary-heading text-left font-semibold ml-16'>This Transaction is {percentage}% of your current total balance</h1>
            </div>

            <div>
                <Chart type='radialBar' series={[percentage]} options={options} />
            </div>
            <div className='flex justify-between text-sm'>
                <h1 className='text-black font-extrabold' >Note</h1>
                <h1 className='text-primary-heading text-left font-semibold ml-16'>{transaction.note} </h1>
            </div>

        </div>
    </div>
  )}
  else{
    return (
      <div className='mt-10 text-center text-3xl'>Select a Transaction to view details</div>
    )
  }
}

export default TransactionDetails