import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import TopCard from '../UI/TopCard';
import Footer from '../UI/Footer';
import SplashScreen from '../SplashScreen';
import { Container } from '@mui/system';
import { Call, LocationOn, Mail } from '@mui/icons-material';

import * as Yup from 'yup'
import { Form, Formik } from 'formik';
import InputField from '../UI/InputField';
import { useRouter } from 'next/router';
const Contact = () => {
    const [loading,setLoading]=useState(true);
    const router=useRouter();

    useEffect(() => {
        const timer=setTimeout(() => {
            setLoading(false);
        }, 100);
      return () => {
        clearTimeout(timer);
      }
    }, [])

    const initialValues={
      name:'',
      email:'',
      mobileNo:'',
      message:''

    };

    const validationSchema=Yup.object({
      name:Yup.string().required('Required'),
      mobileNo:Yup.string().required('Required'),
      message:Yup.string().required('Required'),
    })

    const onSubmitHandler=(values,{resetForm})=>{
      let body=`Name=${values.name}%0D%0A Contact no=${values.mobileNo}%0D%0A Message=${values.message}`
      router.push(`mailto:warehouseservicez@gmail.com?subject=Contact&body=${body}`)
      resetForm();
    }


  return (
    <div className='relative'>
    {loading ? <SplashScreen/>:
    <>
    <ResponsiveDrawer/>
    <TopCard title='Contact Us'/>
    <div className='py-20 bg-white text-black '>
      <Container>

      <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-4'>

      <div className='col-span-1 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-2'>
        <LocationOn sx={{fontSize:40}}/>
        <h2 className='text-xl font-bold text-primary'>Office address</h2>
        <p>Office address Kartikey Tower, 1st Floor , Nr.KVIC Housing Socity , Opposit Kali mandir Enclave , GMS Road , Dehradun</p>
      </div>


      <div className='col-span-1 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-2'>
        <Mail sx={{fontSize:40}}/>
        <h2 className='text-xl font-bold text-primary'>Mail us</h2>
        <p>warehouseservicez@gmail.com</p>
      </div>


      <div className='col-span-1 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-2'>
        <Call sx={{fontSize:40}}/>
        <h2 className='text-xl font-bold text-primary'>Call Us</h2>
        <p>+91 9411712837</p>
        <p>+91 8191802837</p>
        <p>+91 7078789108</p>
        <p>+91 6396025448</p>
      </div>


      </div>

      {/* Form */}
      <div className='bg-gray-200 p-4 rounded-xl '>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitHandler}>
        <Form className='flex flex-col gap-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <InputField className='col-span-1 md:col-span-2' labelName='Name' uni='name' placeholder='Harish'   />
            <InputField  labelName='My email is' uni='Email' placeholder='warehouse@gmail.com'  />
            <InputField  labelName='My mobile no is' uni='mobileNo' placeholder='9876543210'  />
            <InputField  className='col-span-1 md:col-span-2' labelName='Your message .' uni='message' placeholder='Your message' />
          </div>
          <button type='submit' className='bg-primary p-2 text-white hover:opacity-75'>SUBMIT</button>

        </Form>
      </Formik>
      </div>

        

      </Container>
      {/* Map */}
      <div className="flex flex-col justify-center items-center bg-white text-black">
        <h4 className="text-4xl font-bold m-10 ">OUR LOCATION</h4>
        <iframe
          className="w-full h-[300px] md:h-[400px]" title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.2067707735296!2d78.0095323763292!3d30.31663590562165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092925e963de41%3A0xaa1fcaa43e5c52cb!2sWarehouse%20Servicez!5e0!3m2!1sen!2sin!4v1683894184725!5m2!1sen!2sin"
        ></iframe>
        
      </div>
      <Footer/>

    </div>
    </>
    }
    </div>
  )
}

export default Contact