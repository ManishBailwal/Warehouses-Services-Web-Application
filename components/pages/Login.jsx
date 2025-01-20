import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import TopCard from '../UI/TopCard';
import Footer from '../UI/Footer';
import SplashScreen from '../SplashScreen';
import { Container } from '@mui/system';
const Login = () => {
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
    <TopCard title='About'/>
    <div className='py-20 bg-white text-black '>
      <Container>
        Login Page
      </Container>
      <Footer/>

    </div>
    </>
    }
    </div>
  )
}

export default Login