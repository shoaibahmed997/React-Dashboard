import React from 'react'
import {Link} from 'react-router-dom'
import {DiReact}  from 'react-icons/di'
import {SiRedux,SiMaterialui,SiTailwindcss,SiPwa}  from 'react-icons/si'
import {FaIcons}  from 'react-icons/fa'
import {MdSecurity}  from 'react-icons/md'
import {RiWifiOffLine}  from 'react-icons/ri'
import {HiChartSquareBar}  from 'react-icons/hi'
import {AiOutlineApartment}  from 'react-icons/ai'
import {BsFillCloudDownloadFill}  from 'react-icons/bs'
import {GiUpgrade}  from 'react-icons/gi'
import Chip from '@mui/material/Chip';
import Heading from '../Components/Heading'
// import {GrReactjs} from 'react-icons/gr'
const AboutPage = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-evenly px-8 '>
          <div>
            <div className=' text-[72px] text-primary-orange-dark font-extrabold'>
              About The Project
            </div> 
            <p className=' text-slate-500'>Scroll down to read about the implementation and features of project</p>
            <Link to='/'><p className=' text-slate-500'>Click here to go back</p></Link>
          </div>
          <div>
            <img src="/about.jpg" alt="Hey There" />
          </div>
          
      </div>


      <div className=''>
        <div className='w-full flex flex-col items-center mt-6'>
            <Chip sx={{background:"#fff0e9",color:'#fab3a0'}} label='Features'/>
            <div className='font-extrabold text-4xl'>Features</div>
        </div>
          <div className='flex items-center justify-around gap-6 mt-6 flex-wrap p-4'>

              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <DiReact fill='#fab3a0' fontSize="80px" />
                        <div>
                        <Heading title={"Frontend Tech"} />
                        <p className='text-slate-500'>React is used for creating this project. React just never disappoints! </p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <SiRedux fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"State Management"} />
                          <p className='text-slate-500'> Redux Toolkit for seamless state transitions and consistent UI across the app</p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <SiMaterialui fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"Theme"} />
                          <p className='text-slate-500'> Most of the Components are made with the help of material ui.</p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <SiTailwindcss fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"Styling"} />
                          <p className='text-slate-500'> Tailwind CSS is used in the entire project. </p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <FaIcons fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"React Icons"} />
                          <p className='text-slate-500'> React icons provided an easy solution for all the svg and icons related needs</p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <RiWifiOffLine fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"Offline"} />
                          <p className='text-slate-500'> This App is fully functional in offline mode. Turn off your internet and try it!</p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <SiPwa fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"PWA"} />
                          <p className='text-slate-500'>This is Progressive Web App and can be installed on your Device as an app!</p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <HiChartSquareBar fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"Charts"} />
                          <p className='text-slate-500'>Visualise the data with charts and download then for other uses</p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <MdSecurity fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"Authentication"} />
                          <p className='text-slate-500'>Authentication model with react router dom. Just need a backend for JWT</p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <AiOutlineApartment fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"Authentication"} />
                          <p className='text-slate-500'>More than 20 components and 7 pages</p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <BsFillCloudDownloadFill fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"Download"} />
                          <p className='text-slate-500'>Download data into csv files on the go. Currently only supports "Client Data"</p>
                        </div>
              </div>
              <div className='bg-[#fff0e9] border-[#fab3a0] border-2 p-2 gap-2 rounded-md w-60 h-56 flex flex-col items-center text-center'>
                        <GiUpgrade fill='#fab3a0' fontSize="80px" />
                        <div>
                          <Heading title={"Upcoming"} />
                          <p className='text-slate-500'>More features like OKRs, billing, Managing Invoices, Golang Backend and much more</p>
                        </div>
              </div>


              </div>
        </div>


    </div>
  )
}

export default AboutPage