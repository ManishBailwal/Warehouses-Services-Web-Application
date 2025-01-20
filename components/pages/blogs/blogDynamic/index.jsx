import React, { useEffect, useState } from 'react'
import SplashScreen from '../../../SplashScreen';
import Image from 'next/image';
import { assets } from '../../../assets';
import 'react-quill/dist/quill.bubble.css'
import dynamic from 'next/dynamic';
import Person from '@mui/icons-material/Person';
import Footer from '../../../UI/Footer';
import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import Container from '@mui/material/Container';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

const BlogDynamic = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => {
      clearTimeout(timer);
    }
  }, [])


squash
  return (
    <div className='relative'>
      {loading ? <SplashScreen /> :
        <>
          <ResponsiveDrawer />
          <div className='py-20'>
            <Container>
              <div className='flex flex-col gap-4 bg-white shadow-xl rounded-xl p-4 text-black '>
                <h1 className='text-2xl'>{data.title}</h1>
                <h3 className='xl text-primary'>{data.category}</h3>
                <div className='w-full flex items-center gap-4 '>
                  <Image src={assets.about_us_1} width={500} height={300} alt={data.postTitle} />
                </div>
                <div className='flex gap-2 items-center'>
                  <span className='h-8 w-8 bg-black rounded-full flex items-center justify-center'><Person sx={{ color: 'white' }} fontSize='medium' /></span>
                  <p>{data.head.author}</p>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: data.postContent }}></div> */}
                <ReactQuill theme='bubble' value={data.postContent} readOnly />


              </div>
            </Container>
          </div>

          <Footer />

        </>
      }
    </div >
  )
}

export default BlogDynamic