  import React, { useEffect, useRef, useState } from "react";
  import ResponsiveDrawer from "../UI/ResponsiveDrawer";
  import TopCard from "../UI/TopCard";
  import Footer from "../UI/Footer";
  import SplashScreen from "../SplashScreen";
  import { Container } from "@mui/system";
  import axios from "axios";
  import Link from "next/link";
  import { Button, Checkbox } from "@mui/material";
  import { Call, Cancel, Category, CheckCircle, Circle, Close, DoDisturbOn, LocationOn, LocationOnSharp, Search, Visibility, Warehouse } from "@mui/icons-material";
  import Image from "next/image";
  import { assets } from "../assets";
  import FormWrapper from "../UI/FormWrapper";
  import CardSkelton from "../skeltons/CardSkelton";
  import cities_arr, { state_arr } from "../utils/CityDropdown";
  import { useRouter } from "next/router";
const Warehouses = () => {
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);
  const [warehouses, setWarehouses] = useState([]);
  const [searchWarehouses, setSearchWarehouses] = useState([]);
  const [search,setSearch]=useState({
    city:'',
    state:'',
    type:'',
    category:'',
    zone:'',
    format:''
  })

  const router=useRouter();


  const Card=({item})=>{
    return(
      // <div className='flex flex-col md:flex-row w-full shadow-2xl rounded-xl overflow-hidden p-2 gap-4 justify-between items-center'>
      <div className='flex flex-col md:flex-row w-full bg-slate-50 rounded-xl overflow-hidden p-2 gap-4 justify-between items-center'>
        <div className='w-[73%] overflow-hidden rounded-xl'>
      <Image width={300} height={200} alt='Warehouse' src={item.imageUrl} className='object-cover w-[100%]'/>
      </div>

      <div  className='flex justify-between '>
        <div className=''>
          <h3 className='text-lg  font-bold'>{item.propertyName}</h3>
        </div>

      </div>
      <div className='flex flex-col gap-2 w-full text-sm '>
        <div className="font-bold">
          <h2 className="text-lg">{item.type} Type Warehouse, {item.format === 'BTS' ? "Build To Suit": item.format}</h2>
        </div>
        <div className="text-slate-600 font-bold">
          <LocationOnSharp className="text-warehouseBlue" />
          {item.address} {item.city}, {state_arr[item.state]}
        </div>
        {/* <div className='flex justify-between'> */}
          {/* <h3>Format</h3> */}
          {/* <h3 className='font-semibold'>{item.format}</h3> */}
        {/* </div> */}
        {/* <div className='flex justify-between'> */}
          {/* <h3>Type</h3> */}
          {/* <h3 className='font-semibold'>{item.type}</h3> */}
        {/* </div> */}
        {/* <div className='flex justify-between'> */}
          {/* <h3>Size</h3> */}
          {/* <h3 className='font-semibold'>{item.size}</h3> */}
        {/* </div> */}
        <div className="flex justify-between items-center">
        <div className='flex justify-between items-center gap-1'>
          {item.zone.toLowerCase() === 'normal'?
          <Circle className="text-slate-300" />
           :
          <Circle style={{color: `${item.zone.toLowerCase()}`, opacity: 0.7}} />
          }
          <h3 className='font-semibold'>{item.zone} Zone</h3>
        </div>
        {/* <div className='flex justify-between items-center gap-1'> */}
          {/* <Category /> */}
          {/* <h3 className='font-semibold'>{item.category} Category</h3> */}
        {/* </div> */}
        </div>
        {/* <div className="text-slate-600"> */}
          {/* sit amet consectetur adipisicing elit. Repudiandae at sint consequatur sunt ex perferendis nulla harum ipsam, unde soluta. Lorem */}
        {/* </div> */}

        <div className="flex rounded-sm justify-between px-1 border-2 border-primary ">
        <div className='flex items-center p-1 gap-1'>
          <Warehouse className="text-secondary" />
          <h3 className='font-semibold text-secondary'>{item.size}</h3>
        </div>
        <div className='flex items-center px-2 gap-1'>
          {item.category.toLowerCase() === "approved"?
           <CheckCircle className="text-green-600" />:
           item.category.toLowerCase() === "non-approved"?
           <Cancel className="text-white" />
           :
           <DoDisturbOn className="text-primary" />}
          <h3 className='font-semibold text-secondary'>{item.category} Category</h3>
        </div>
        </div>
        {item.partlyAvailable &&
        <div className="flex rounded-sm justify-between px-1 border-2 border-primary p-1 text-secondary ">
          Partly Available : {item.partlyAvailable}
        </div>
        }
        {/* <div className='flex justify-between'> */}
          {/* <h3>Address</h3> */}
          {/* <h3 className='font-semibold'>{item.address}</h3> */}
        {/* </div> */}
        {/* <div className='flex justify-between'> */}
          {/* <h3>City</h3> */}
          {/* <h3 className='font-semibold'>{item.city}</h3> */}
        {/* </div> */}
        {/* <div className='flex justify-between'> */}
          {/* <h3>State</h3> */}
          {/* <h3 className='font-semibold'>{state_arr[item.state]}</h3> */}
        {/* </div> */}

      <div className='self-end flex justify-between gap-2'>
        <a href={`tel:+918191802837`}> <Button variant='contained' sx={{backgroundColor:'#614385' ,":hover":{backgroundColor:'#516395'}}} endIcon={<Call/>}>Call</Button></a>
      </div>
      </div>
 
    </div>

    )
  }

  useEffect(() => {
    const getWareHouses = async () => {
      const response = await axios.get("/api/warehouses");
      let temp=[];
      response.data.warehouses.map((item) => item.enabled && temp.push(item));
      setWarehouses(temp);
      setSearchWarehouses(temp);
      setDataLoading(false);
    };
    getWareHouses();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setSearch({
      city:router.query.city ? router.query.city : '',
      state:router.query.state ? router.query.state : '',
      type:router.query.type ? router.query.type : '',
      category:router.query.category ? router.query.category : '',
      zone:router.query.zone ? router.query.zone : '',
      format:router.query.format ? router.query.format : '',
    })
  }, [router.query])
  

 

  useEffect(() => {

    console.log("RUNNING")
      const filteredData = warehouses.filter((item) => {

        const stateMatch = search.state ? item.state.toLowerCase()===search.state.toLowerCase() : true;
        const cityMatch = search.city ? item.city.toLowerCase().includes(search.city.toLowerCase()) : true;
        const typeMatch = search.type ? item.type.toLowerCase()===search.type.toLowerCase() : true;
        const categoryMatch = search.category ? item.category.toLowerCase()===search.category.toLowerCase() : true;
        const zoneMatch = search.zone ? item.zone.toLowerCase()===search.zone.toLowerCase() : true;
        const formatMatch = search.format ? item.format.toLowerCase()===search.format.toLowerCase() : true;

        // const categoryMatch = search.category ? item.category.toLowerCase().includes(search.category.toLowerCase()) : true;

        return stateMatch && cityMatch && typeMatch && categoryMatch && zoneMatch && formatMatch;
      });

      setSearchWarehouses(filteredData);
      console.log(filteredData);

      if(search.city==='' && search.state==='' && search.type==='' && search.category==='' && search.zone==='' && search.format==='')setSearchWarehouses(warehouses)
    

  }, [search,warehouses])
  
  

  return (
    <div className="relative">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <ResponsiveDrawer />
          <TopCard title="WAREHOUSES" />

            <div className="pb-20 pt-10 bg-white text-black ">
            <Container>
          <div className=" py-10  flex flex-col md:flex-row gap-4 relative ">

            <div className="md:sticky md:top-[100px] shadow-xl rounded-lg p-2 bg-gray-200 h-[100%] flex flex-col gap-2" >
              <h3 className="text-xl font-bold text-secondary text-center">SEARCH</h3>
            <div  className="flex flex-col">
            <label htmlFor="search_state" >State</label>
            <select value={search.state} onChange={(e)=>setSearch({...search,state:e.target.value})}  name="search_state" className="bg-white rounded-lg  p-2 py-3">
            <option  value=''>All</option>
              {state_arr.map((item, i) =>
                <option key={i} value={i}>{item}</option>
              )}
            </select>
            </div>

  

            <div className="flex flex-col">
            <label htmlFor="search_city">City</label>
            <input value={search.city} placeholder="Enter City" onChange={(e)=>setSearch({...search,city:e.target.value})}  type="text" className="bg-white rounded-lg  p-2" name="search_city" list="options_city"/>

             <datalist  id="options_city">
              {cities_arr.map((item, i) =>
              item.map((item2,j)=>
              <option key={j} value={item2}>{item2}</option>
              )
              )}
              </datalist> 
            </div>

            <div className="flex flex-col">
            <label htmlFor="search_type">Type</label>
            <select value={search.type} onChange={(e)=>setSearch({...search,type:e.target.value})}  className="bg-white rounded-lg  p-2 py-3">
             <option  value=''>All</option>
              <option value='Prefab Structure'>Prefab Structure</option>
              <option value='Semi Prefab Structure'>Semi Prefab Structure</option>
              <option value='RCC'>RCC</option>
              <option value='Shed'>Shed</option>
              <option value='Land'>Land</option>
              <option value='Multi Store'>Multi Store</option>
              </select>
            </div>

            <div className="flex flex-col">
            <label htmlFor="search_type">Zone</label>
            <select value={search.zone} onChange={(e)=>setSearch({...search,zone:e.target.value})}   className="bg-white rounded-lg  p-2 py-3">
             <option value=''>All</option>
             <option value='Normal'>Normal</option>
             <option value='Red'>Red</option>
             <option value='Blue'>Blue</option>
             <option value='Green'>Green</option>
             <option value='Yellow'>Yellow</option>
             <option value='Purple'>Purple</option>
             <option value='Industrial'>Industrial</option>
              </select>
            </div>

            <div className="flex flex-col">
            <label htmlFor="search_type">Category</label>
            <select value={search.category} onChange={(e)=>setSearch({...search,category:e.target.value})}   className="bg-white rounded-lg  p-2 py-3">
             <option  value=''>All</option>
             <option value='Approved'>Approved</option>
             <option value='Non-Approved'>Non-Approved</option>
             <option value='Both'>Both</option>
            </select>
            </div>

            <div className="flex flex-col">
            <label htmlFor="search_type">Format</label>
            <select value={search.format} onChange={(e)=>setSearch({...search,format:e.target.value})}   className="bg-white rounded-lg  p-2 py-3">
             <option  value=''>All</option>
             <option value='BTS'>BTS (Build to suite)</option>
             <option value='Under Construction'>Under Construction</option>
              <option value='Ready to Move'>Ready to Move</option>
            </select>
            </div>
            {/* <div className="flex flex-col">
            <label htmlFor="search_category">Category</label>
            <select onChange={(e)=>setSearch({...search,category:e.target.value})} defaultValue={search.category}  className="bg-white rounded-lg  p-2 py-3">
             <option  value=''>All</option>
                  <option value='Approved'>Approved</option>
                  <option value='Non Approved'>Non Approved</option>
                  <option value='Both'>Both</option>
              </select>
            </div> */}
            <Button onClick={()=>{
              setSearch({
                city:'',
                state:'',
                type:'',
                category:'',
                zone:'',
                format:''
              })
            }} className="w-full" variant="contained" endIcon={<Close/>}>RESET FILTERS</Button>
            </div>

            <div className='flex flex-col gap-4  w-full'>
                {dataLoading ?
                <div className="w-full flex flex-col gap-2">
                <CardSkelton/>
                <CardSkelton/>
                <CardSkelton/>
                <CardSkelton/>
                <CardSkelton/>
                <CardSkelton/>
                </div>
                : searchWarehouses.length>0 ? searchWarehouses.map((item,i)=> item.enabled && <Card key={i} item={item} />)
                :<h2 className="text-xl font-bold text-center m-auto">NO WAREHOUSES FOUND</h2>}
            </div>

                

          </div>
              
            </Container>
            </div>
            <Footer />

        </>
      )}
    </div>
  );
};

export default Warehouses;
