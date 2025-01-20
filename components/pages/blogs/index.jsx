import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../../UI/ResponsiveDrawer';
import Footer from '../../UI/Footer';
import SplashScreen from '../../SplashScreen';
import { Container } from '@mui/system';
import BlogCard from './components/BlogCard';
import Link from 'next/link';
import axios from 'axios';
const Blogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400);
        return () => {
            clearTimeout(timer);
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await axios.get('/api/blogsconditional', {
                    "fields": ['title', 'category', 'pageSlug', 'updatedAt', 'isActive']
                });
                let temp=[];
                temp=res.data.data.filter((item)=>item.isActive===true);
                setBlogs(temp);

            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)
            }

        }
        fetchData()
    }, [])



    return (
        <div className='relative'>
            {loading ? <SplashScreen /> :
                <>
                    <ResponsiveDrawer />
                    <div className='py-20 bg-white text-black '>
                        <Container>
                            {/* Write all of your code here */}
                            <div className='grid grid-cols-5  gap-4'>
                                <div className='bg-gray-200 order-1 md:order-1 rounded-xl col-span-5 md:col-span-3  p-4 flex flex-col gap-4'>
                                    {blogs.map((item, index) => {
                                        return <BlogCard key={index} item={item} />
                                    })}
                                    {blogs.length === 0 && <h1 className='text-center'>No Blogs Found</h1>}
                                </div>
    {/*                                 <div className='bg-gray-200 order-2 md:order-2 rounded-xl col-span-5 md:col-span-2 p-4 flex flex-col gap-4 md:h-[600px]'>
                                    <h3 className='text-xl text-center'>Categories</h3>
                                    <div className='flex flex-col gap-2 '>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=SEO`}>SEO</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=Link-Building`}>Link Building</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=Content-Marketing`}>Content Marketing</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=Guest-Posting`}>Guest Posting</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=Digital-Marketing`}>Digital Marketing</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=Social-Media-Marketing`}>Social Media Marketing</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=Email-Marketing`}>Email Marketing</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=PPC`}>PPC</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=Web-Design`}>Web Design</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=News`}>News</Link>
                                        <Link className='bg-white p-2 hover:opacity-80  rounded-sm text-black ' href={`/blogs?category=Others`}>Others</Link>
                                    </div>

                                </div> */}


                            </div>


                        </Container>

                    </div>
                    <Footer />
                </>
            }
        </div>
    )
}

export default Blogs
