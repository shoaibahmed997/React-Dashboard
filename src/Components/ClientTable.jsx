import React from 'react'
import useClients from '../Hooks/useClients'
import ClientListItem from './ClientListItem'
import {AiOutlineDownload} from 'react-icons/ai'

const downloadCSV = (allClients)=>{
  let headers = [['Client Name',"Client's Company","Company's Logo URL","Client's Location","Contact","Email" ]]
  let newlist = []
  allClients.forEach(item=>{
    let temp = []
    for(let key in item){
      temp.push(item[key])
    }
    newlist.push(temp)
  })
  let csvContent = "data:text/csv;charset=utf-8,"+headers.map(e => e.join(",")).join("\n") +"\n"
  csvContent += newlist.map(e => e.join(",")).join("\n");
  let encodedUri = encodeURI(csvContent);
  window.open(encodedUri);
}

const ClientTable = ({setModes}) => {
    const allClients = useClients()

    

  return (
    <div>
      <div  className=' font-extrabold my-1 grid grid-cols-[1fr_1fr_1fr_1fr_1.5fr_.5fr] text-sm items-center p-2 transition-all hover:bg-slate-200 hover:cursor-pointer rounded-md'>
            <div>
              Client Name
            </div>
            <div>
              Client&apos;s Company
            </div>
            <div>
              Location
            </div>

            <div>
              Contact 
            </div>
            <div>
              Email
            </div>
            <div>
              <AiOutlineDownload onClick={()=>downloadCSV(allClients)} fontSize="30px" />
            </div>
            
              </div>
            <div className='flex flex-col overflow-scroll h-[28rem]'>
              {allClients && allClients.map((client,i)=>{
                return <ClientListItem setModes={setModes}  client={client} key={i}  />
              })}
          </div>
    </div>
  )
}

export default ClientTable