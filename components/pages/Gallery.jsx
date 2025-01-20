import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import TopCard from '../UI/TopCard';
import Footer from '../UI/Footer';
import SplashScreen from '../SplashScreen';
import { Container } from '@mui/system';
import Image from 'next/image';
import { assets } from '../assets';
import { Close } from '@mui/icons-material';
import axios from 'axios';
const Gallery = () => {
    const [loading,setLoading]=useState(true);
    const [galleryImages,setGalleryImages]=useState([]);

    useEffect(() => {
      const fetchGallery = async () => {

        try {
            const response = await axios.get(`/api/gallery`)
            setGalleryImages(response.data.images)
            setLoading(false);
        }
        catch (err) {
            toast.error(err)
        }

    }
    fetchGallery();


      
     
    }, [])



    const [modal,setModal]=useState(false);
    const [currentImage,setCurrentImage]=useState(assets.art_01);



  return (
    <div className='relative'>
    {loading ? <SplashScreen/>:
    <>
    <ResponsiveDrawer/>
    <TopCard title='Gallery'/>
    <div className='py-20 bg-white text-black '>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 '>
          {galleryImages.map((item,i)=>
          <Image key={i} width={400} height={200} onClick={()=>{setCurrentImage(item.image);setModal(true);}} alt='Sikka warehouse image' className=' bg-green-100 w-[100%] h-[200px] object-cover cursor-pointer' src={item.image} />
          )}
        </div>

      </Container>

    </div>
    {modal && <div onClick={()=>{setModal(false)}} className='fixed top-[80px] bottom-0 h-[100vh] w-[100%] backdrop-brightness-50'>
      <div className='w-[90%] md:w-[70%] h-[100%]  m-auto flex flex-col justify-center items-center relative '>
        <Image width={1366} height={768} src={currentImage} className='w-[100%] h-[70%]  object-contain' alt='Greenwood hill school image' />
      </div>
      <div onClick={()=>setModal(false)} className='absolute top-4 right-4 md:top-10 md:right-10 rounded-full h-12 w-12 bg-secondary flex justify-center items-center cursor-pointer hover:scale-110 duration-200'><Close fontSize='large' sx={{color:'white'}}/></div>
      
    </div>
    }
    <Footer/>
    </>
    }
    </div>
  )
}

export default Gallery