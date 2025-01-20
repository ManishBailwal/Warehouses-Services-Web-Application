import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { assets } from '../../../assets'


const BlogCard = ({item}) => {
  return (
    <div className='flex flex-col p-4 bg-white rounded-xl  gap-4'>
        <div className='h-80 bg-pink-100 rounded-xl overflow-hidden' >
            <Image src={assets.about_us_1} alt='Blog' width={1080} height={720} className='object-cover' />
        </div>
        <h3 className='text-xl'>{item.title}</h3>
        <h3 className='text-xl'>{item.category}</h3>
        <div className='flex justify-end'>
          <Link href={'/blogs/'+item.pageSlug} className='bg-black text-center text-white px-4 py-2 rounded-sm'>Read More</Link>
        </div>
    </div>
  )
}

export default BlogCard