import React, { useContext } from 'react'
import { IconButton } from "@mui/material";

import { assets } from '../assets';
import  Call  from '@mui/icons-material/Call';
import  Mail  from '@mui/icons-material/Mail';
import  LocationOn  from '@mui/icons-material/LocationOn';
import  Facebook  from '@mui/icons-material/Facebook';
import  Instagram  from '@mui/icons-material/Instagram';
import  Twitter  from '@mui/icons-material/Twitter';
import  WhatsApp  from '@mui/icons-material/WhatsApp';
import Link from 'next/link';


const Footer = () => {
    const menu=[
        {
            title:'Home',
            link:'/'
        },
    ]
    const currentYear=new Date().getFullYear();
  return (
    <div className='bg-warehouseBlue text-white '>
    <div className='fixed bottom-0 right-0 flex justify-end z-10 '>
        <a rel="noreferrer" target='_blank' href={`https://wa.me/+918191802837`} className='font-bold bg-green-500 w-16 h-16 dark:mb-10 m-4 rounded-full flex justify-center items-center'>
      <WhatsApp sx={{color:'white'}} fontSize='large'/>
    </a>
    </div>
    <footer id='footer' className=" w-[100%]  p-4 bg-pri    md:px-6 md:py-8">

    <div id='Ubuntu' className=' py-8 grid grid-cols-1 md:grid-cols-3  gap-8 mdrev:grid-cols-1 text-white'>
        <div className='flex  flex-col items justify-center gap-4 px-4'>
            <h4 className=' text-xl font-semibold text-center'>Contact Info</h4>
            <div className='grid grid-cols-5'><Mail sx={{color:'white'}} fontSize='medium'/> <a href={`mailto:warehouseservicez@gmail.com`} className='hover:underline  font-semibold col-span-4'>warehouseservicez@gmail.com</a></div>
            <div className='grid grid-cols-5'><Call sx={{color:'white'}} fontSize='medium'/> <a href={`tel:+918191802837`} className='hover:underline  font-semibold col-span-4'>+918191802837</a></div>
            <div className='grid grid-cols-5'><LocationOn sx={{color:'white'}} fontSize='medium'/> <span className=' font-semibold col-span-4'>Kartikey Tower,1st Floor , Nr. KVIC Housing Society ,Opposite Kali Mandir Enclave , GMS Road , Dehradun</span></div>
        </div>

        <div className='flex  flex-col  items-center px-4 gap-2 '>
        <h4 className=' text-xl font-semibold'>Quick Links</h4>
        <div className='flex gap-2 flex-wrap md:flex-col'>

            <Link href={'/'} className='hover:underline text-center font-semibold'>HOME</Link>
            <Link href={'/blogs'} className='hover:underline text-center font-semibold'>BLOGS</Link>
            <Link href={'/services'} className='hover:underline text-center font-semibold'>SERVICES</Link>
            <Link href={'/contact'} className='hover:underline text-center font-semibold'>CONTACT</Link>
            <Link href={'/about'} className='hover:underline text-center font-semibold'>ABOUT</Link>
            </div>
        </div>

        <div className='flex  flex-col  items-center px-4 gap-2 '>
        <h4 className=' text-xl font-semibold'>Follow Us</h4>
        <div className='flex gap-2'>
            <IconButton onClick={()=>{window.open("https://www.facebook.com/warehouseservicez", "_blank")}}><Facebook sx={{color:'white'}}/></IconButton>
            <IconButton onClick={()=>{window.open("https://instagram.com/warehouse.services?igshid=NTc4MTIwNjQ2YQ==", "_blank")}}><Instagram sx={{color:'white'}}/></IconButton>
            <IconButton onClick={()=>{window.open("https://twitter.com/warehouseservi3", "_blank")}}><Twitter sx={{color:'white'}}/></IconButton>
        </div>

        </div>


    </div>

    <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
    <div className='flex flex-col gap-2 md:flex-row w-[100%] items-center justify-center '>
    <p className="flex justify-center whitespace-nowrap">Copyright &copy; {currentYear} <Link href="/" className="hover:underline pl-1"> Warehouse Servicez</Link></p>
    <p className='text-center'>All Rights Reserved.</p>
    </div>
    <div className="flex justify-center gap-2"><span>Developed by </span><a target='_blank' rel="noreferrer"  href="https://arterns.in" className="hover:underline">Arterns Technologies Pvt Ltd</a> </div>

</footer>
</div>
  )
}

export default Footer