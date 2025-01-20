import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import {toast} from 'react-toastify'

import Spinner from '../UI/Spinner';
import AuthContext from '../store/AuthContext';
import SplashScreen from '../SplashScreen';
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import Footer from '../UI/Footer';

const AdminPanel = () => {
    const [loading,setLoading]=useState(true);
    const [buttonLoading,setButtonLoading]=useState(false);

    useEffect(() => {
        const timer=setTimeout(() => {
            setLoading(false);
        }, 100);
      return () => {
        clearTimeout(timer);
      }
    }, [])
  const authCtx = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (authCtx.isLoggedIn) {
      router.push('/dashboard');
      toast.warn('Already Logged In');
    }
  }, []);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const formHandler = async (e) => {
    e.preventDefault();
        
    if (!formData.username || !formData.password) {
        toast.warn('All fields are required')
      return;
    }

    try {
      setButtonLoading(true);
      const response = await axios.post(
        '/api/login',
        {
          username: formData.username,
          password: formData.password,
        }
      );
      if (response.status === 200) {
        toast.success('Signed in Successfully');
        setFormData({
          username: '',
          password: '',
        });
        console.log(response.data)
        authCtx.login(response.data.user._id, response.data.user.token,'admin');
        router.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
      const message = err.response.data.message;
      toast.warn(message);
    }
    setButtonLoading(false);
  };

  return (
    <div className='relative bg-white'>
    {loading ? <SplashScreen/>:
    <>
      {!authCtx.isLoggedIn ? (
        <>
        <ResponsiveDrawer/>
        <div className="mt-16 flex justify-center items-center font-sans bg-white mb-10">
          <div className="flex flex-col justify-center items-center w-[90vw]  md:w-[500px] md:m-auto  bg-primary text-white rounded-lg md:p-16 p-8">
            <h4 className="uppercase  text-2xl mb-4">Login</h4>
            <form className="w-full flex flex-col  space-y-4">
              <div className="flex flex-col items-center space-y-2 text-md">
                <label htmlFor="email">User Name or Email</label>
                <input
                  className="bg-white rounded-sm w-full h-10 text-black p-4"
                  type="text"
                  id="email"
                  value={formData.username}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col items-center space-y-2 text-md">
                <label htmlFor="password">Password</label>
                <input
                  className=" bg-white rounded-sm w-full h-10 text-black p-4"
                  type="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-center space-y-2">
                {!buttonLoading ? (
                  <button
                    className={`bg-secondary text-white w-40 h-10  hover:bg-quat`}
                    onClick={formHandler}
                  >
                    SIGN IN
                  </button>
                ) : (
                  <Spinner size={60} />
                )}
              </div>
            </form>

            <Link href="/signup" passHref>
              <button className="mt-2 hover:text-[#FFE8E8]">
                Create new Account
              </button>
            </Link>
          </div>
        </div>
        <Footer/>
        </>
      ) : (
        <div></div>
      )}
    </>
    }
    </div>
  );
};

export default AdminPanel;