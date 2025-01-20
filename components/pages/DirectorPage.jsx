import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import Footer from '../UI/Footer';
import SplashScreen from '../SplashScreen';
import { Container } from '@mui/system';
import Image from 'next/image';
import { assets } from '../assets';
import TopCard from '../UI/TopCard';
const DirectorPage = () => {
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const timer=setTimeout(() => {
            setLoading(false);
        }, 100);
      return () => {
        clearTimeout(timer);
      }
    }, [])


  return (
    <div className='relative'>
    {loading ? <SplashScreen/>:
    <>
    <ResponsiveDrawer/>
    <TopCard title='Director&apos;s Message'/>
    <div id='Ubuntu' className='py-4 bg-white text-black '>
      <Container>
        <div className=' p-4 shadow-2xl rounded-xl my-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col justify-center items-center w-[100%] '>
          <Image src={assets.director} alt='Director' className=' w-[400px] aspect-auto rounded-full border-4 p-2'/>
          </div>
          <div className='flex flex-col gap-4 text-black'>
            <h2 className='text-xl font-bold'>Message From warehouse Servicez Managing Director</h2>
            <h3 >Dear valued customers,</h3>
            <p className=''>I am honored to welcome you to the Warehouse Servicez , where we offer reliable and efficient warehouse services to meet your storage needs. As the Managing Director of Warehouse Servicez, I take pride in our commitment to providing exceptional warehousing solutions to our esteemed clientele. Our reputation for reliability, efficiency, and quality has made us a well-known company in the warehousing industry. We take pride in our ability to deliver on our promises and exceed our customer&apos;s expectations. Thank you for considering Warehouse Servicez for your warehousing needs. We look forward to the opportunity to serve you and earn your trust , Our Motto is Simple “ Minimum the Rental , Longer the Survival . </p>
            <p>Sincerely,</p>
            <p className='font-bold'>Harish Kumar Sikka</p>
            <p>Managing Director, Warehouse Servicez </p>
          </div>
        </div>
      </Container>
      <Footer/>

    </div>
    </>
    }
    </div>
  )
}

export default DirectorPage