import { Switch, TextField } from '@mui/material'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

const BlogCard = ({ item }) => {
    const [checked, setChecked] = React.useState(item.isActive);
    const handleChange = async (event) => {
        try{
        const res = await axios.put(`/api/blog`, { isActive: event.target.checked,id:item._id }, );
        if (res.status === 200 || res.status === 201) {
            setChecked(!event.target.checked);
            toast.success('Toggled Successfully');
        }
        }
        catch(err){
            console.log(err)
        }

    };

    return (
        <div className={`bg-gray-200 rounded-xl h-[240px] p-4 flex flex-col gap-2 `}>
            <div className=''>
                <h3 className='text-xl'>{item.pageSlug}</h3>
                <p>{item.category}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>ENABLED</p>
                <Switch checked={checked} onClick={(e) => handleChange(e)} />
            </div>
            <p className=''>Last Modified on <span className='font-bold'>{new Date(item.updatedAt).toUTCString()}</span></p>
            <Link href={'/dashboard/edit-blog'+`?id=${item._id}`} className='bg-black text-center px-4 py-2 text-white rounded-md mt-auto'>VIEW</Link>

        </div>
    )
}

export default BlogCard