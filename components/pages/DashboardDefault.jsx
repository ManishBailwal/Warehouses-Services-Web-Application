import React, { useState } from 'react'
import Dashboard from './Dashboard'
import { useEffect } from 'react';
import { Link, ListItemText, Switch } from '@mui/material';
import axios from 'axios';
import Spinner from '../UI/Spinner';
import { toast } from 'react-toastify';
import cities_arr, { state_arr } from '../utils/CityDropdown';
const label = { inputProps: { 'aria-label': 'Switch demo' } };


const DashboardDefault = () => {
  const [search,setSearch]=useState('');
  const [warehouses, setWarehouses] = useState([]);
  const [searchWarehouses, setSearchWarehouses] = useState([]);
  const [dataLoading,setDataLoading]=useState(true);
  const [changed,setChanged]=useState(true);

  useEffect(() => {
    const getWareHouses = async () => {
      const response = await axios.get("/api/warehouses");
      setWarehouses([...response.data.warehouses]);
      setSearchWarehouses([...response.data.warehouses])
      setDataLoading(false);
    };
    getWareHouses();
  }, [changed])
  
  useEffect(() => {
    const searchResults = warehouses.filter((item) => {
      return (
        item.address.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase()) ||
        item.format.toLowerCase().includes(search.toLowerCase()) ||
        item.city.toLowerCase().includes(search.toLowerCase()) ||
        state_arr[item.state].toLowerCase().includes(search.toLowerCase()) ||
        item.size.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.zone.toLowerCase().includes(search.toLowerCase()))
    })
    setSearchWarehouses(searchResults)
    if(search=='')setSearchWarehouses(warehouses)

  }, [search])

  const Content=({item})=>{
  const [disabling,setDisabling]=useState(false);

  const handleDisableOrEnable=async(id,enabled)=>{
    setDisabling(true);
    console.log(enabled)
    const response=await axios.put(`/api/enableWarehouse?id=${id}`,{enabled})
    console.log(response.data)
    toast.success(response.data.message)
    setDisabling(false);
    setChanged(!changed);
    setDataLoading(true)
  }
    const warehouseDeleteHandler=async(id)=>{
      try{
      const response=await axios.delete(`/api/warehouse?id=${id}`)
      toast.success(response.data.message)
      setChanged(!changed)
      }
      catch(err){
        console.log(err);
        toast.error(err.message)
      }
    }

    const [hidden,setHidden]=useState(true);
    return(
      <tr className='py-1'>
      <td className='p-2'>{item?.format}</td>
      <td className='p-2'>{item?.type}</td>
      <td className='p-2'>{item?.size}</td>
      <td className='p-2'>{item?.zone}</td>
      <td className='p-2'>{item?.city}</td>
      <td className='p-2'>{state_arr[item?.state]}</td>
      <td className='p-2'><Switch {...label} disabled={disabling} defaultChecked={item.enabled}
      onChange={()=>handleDisableOrEnable(item?._id,item.enabled)}
      /></td>
      <td className='w-32 p-2 '><a href={`/dashboard/addwarehouse?id=${item?._id}`}><button  className={`w-[100%] ${'bg-primary'} text-white p-1 rounded-sm`}>View</button></a></td>
      <td className='w-32 p-2 '><button onClick={()=>warehouseDeleteHandler(item._id)}  className={`w-[100%] ${'bg-red-400'} hover:bg-red-300 text-white p-1 rounded-sm`}>Delete</button></td>
    </tr>
    )
  }

  return (
    <Dashboard>
      {dataLoading  && <div className='flex justify-center h-[40vh] items-end overflow-hidden'><Spinner size={80}/></div>}
      {!dataLoading && warehouses.length>0 &&
      <>
      <div className='flex gap-4'>
      <input placeholder='Search' onChange={(e)=>setSearch(e.target.value)} defaultValue={search} name="search_state" className="bg-blue-100 p-[10px]  w-[100%]"/>
      <button  className={`w-32 ${'bg-primary'} text-white p-1 rounded-sm`}>Search</button>
      </div>
      <div className='p-4 overflow-x-auto min-w-[100%] max-w-[300px]'>
      <table className='text-black w-[100%]'>
        <tr className='text-left'>
          <th className='p-2'>Format</th>
          <th className='p-2'>Type</th>
          <th className='p-2'>Size</th>
          <th className='p-2'>Zone</th>
          <th className='p-2'>City</th>
          <th className='p-2'>State</th>
          <th className='p-2'>Enabled</th>
          <th className='p-2'>View</th>
          <th className='p-2'>Delete</th>
        </tr>
        {searchWarehouses.map((item,i)=>(
          <Content key={i} item={item}/>
        ))}
      </table>
      </div>
      </>
      }
      {!dataLoading && warehouses.length===0 &&
      <div className='text-center h-[40vh] flex flex-col justify-end items-center overflow-hidden gap-4'>
       <h3 className='text-lg font-bold'>No Warehouses found</h3>
      <Link href='/dashboard/addwarehouse'><button className=' bg-primary text-white p-2 hover:bg-secondary w-64'>ADD WAREHOUSE</button></Link>
       </div>
       }

      {search && searchWarehouses.length===0 &&
      <div className='text-center h-[30vh] flex flex-col justify-end items-center overflow-hidden gap-4'>
       <h3 className='text-lg font-bold'>No Warehouses found</h3>
       </div>
       }
    </Dashboard>
  )
}

export default DashboardDefault