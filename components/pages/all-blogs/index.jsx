import { Divider } from '@mui/material'
import FormWrapper from '../../UI/FormWrapper'
import BlogCard from './components/BlogCard'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Spinner from '../../UI/Spinner'
import { useRouter } from 'next/router'
import axios from 'axios'
const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const router=useRouter();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await axios.get('/api/blogsconditional',{
                    "fields": ['title', 'category', 'pageSlug', 'updatedAt', 'isActive']
                });
                setBlogs(res.data.data);

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
        <div className='flex flex-col gap-4 text-black'>
            <h1 id='Ubuntu' className='text-4xl font-bold'>ALL BLOGS PAGE</h1>
            <Divider />
            <div className=' flex justify-end gap-2 '>
                <Link href={'/dashboard/add-blog'} type='submit' className=' text-center rounded-lg px-8 py-2 bg-black text-white hover:opacity-90'>ADD</Link>
            </div>
            {loading &&
                <div className='mx-auto'>
                    <Spinner />
                </div>
            }
            {blogs.length === 0 && !loading && <div className='text-center text-2xl'>No Blogs Found</div>}

            <FormWrapper>
                {blogs.map((item, i) =>
                    <BlogCard key={i} item={item} />
                )}
            </FormWrapper>


        </div >
    )
}

export default AllBlogs;