import React from 'react'
import DashboardButtonLine from '../Components/DashboardButtonLine'
import DashboardHero from '../Components/DashboardHero'
import Heading from '../Components/Heading'
import RangeBar from '../Components/RangeBar'
import RightNav from '../Components/RightNav'




const DashboardPage = () => {
  return (
    <div className='grid grid-cols-[2.5fr_1fr]'>

      <div className='bg-primary-white px-4'>
        <div>
          <div className='mt-2 text-3xl '>
              <Heading title={'Your Overview'}  />
          </div>
          <p className='text-sm text-slate-500'>Manage all your banking activity at one place</p>
        </div>
        <div className='mt-4'>
              <Heading title={'Monthly Report'} />
        </div>
        <div>
            <DashboardHero />
        </div>
        <div>
          <DashboardButtonLine />
        </div>
        <div>
          <RangeBar />
        </div>
      </div>
      <RightNav />
    </div>
  )
}

export default DashboardPage