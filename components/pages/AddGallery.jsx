import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import FormWrapper from '../UI/FormWrapper'
import Gap from '../UI/Gap'
import Spinner from '../UI/Spinner'
import { Add, Cancel } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { assets } from '../assets'
import Image from 'next/image'
// import cloudinary from '../utils/cloudinary'
const AddGallery = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(id)
    const [buttonLoading, setButtonLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [preview, setPreview] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [changed, setChanged] = useState(true);
    const [image, setImage] = useState([]);

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

    }, [id, changed])

    const onSubmitHandler = async () => {

        setButtonLoading(true);
        let imageUrl = ''
        if (image.length > 0) {
            const formData = new FormData();
            formData.append('file', image[0]);
            formData.append('upload_preset', 'client-uploads');
            try {
                const res = await fetch(`https://api.cloudinary.com/v1_1/da75fckow/image/upload`, {
                    method: 'POST',
                    body: formData,
                });
                const data = await res.json();
                imageUrl = data.secure_url;
                setImage([]);
                setPreview([]);
                setChanged(!changed)
            }
            catch (err) {
                console.error(err);
            }
        }

        try {
            const response = await axios.post('/api/gallery', { image: imageUrl });
            toast.success(response.data.message)
        }
        catch (err) {
            console.log(err)
        }
        setButtonLoading(false)

    }




    useEffect(() => {
        if (image.length === 0) return;
        const objectUrl = URL.createObjectURL(image[image.length - 1]);
        setPreview([...preview, objectUrl]);
    }, [image])

    const addImages = (e) => {
        setImage([...image, e.target.files[0]])
    }

    const imageDeleteHandler=async(id)=>{
        const response=await axios.delete(`/api/gallery?id=${id}`)
        toast.success(response.data.message);
        setChanged(!changed)
    }
    return (
        <Dashboard>
            {loading ? <div className='flex justify-center h-[40vh] items-end overflow-hidden'><Spinner size={80}/></div> : 
            <>
            <Gap>Gallery</Gap>

            <FormWrapper>
                {galleryImages.map((item, i) =>
                 <div key={i} className='relative w-full h-60 flex justify-center items-center overflow-hidden'>
                    <Image key={i} alt='Sikka warehouse image' width={320} height={200} className='  h-full  overflow-hidden object-contain  cursor-pointer' src={item.image} />
                    <IconButton onClick={() => imageDeleteHandler(item._id)}
                    sx={{ position: 'absolute', top: -4, right: -4, zIndex: 10 }} aria-label="delete" size="small"><Cancel /></IconButton>
                 </div>
                )}
                {image && (
                    preview.map((item, i) =>
                        <div key={i} className='relative'>
                            <div key={i} className=" w-full h-60 rounded-md flex justify-center items-center overflow-hidden">
                                <img className='object-contain w-[100%] h-[100%]' src={item}></img>
                            </div>
                            <IconButton onClick={() => {
                                setPreview(preview.filter((item2 => {
                                    return item2 !== item
                                })))

                                setImage(preview.filter((item2 => {
                                    return item2 !== item
                                })))

                            }
                            } sx={{ position: 'absolute', top: -16, right: -16, zIndex: 10 }} aria-label="delete" size="small"><Cancel /></IconButton>
                        </div>
                    )
                )}
                {preview.length < 1 && <div className="border-2 border-dotted w-full h-60 border-black rounded-md flex justify-center items-center lgrev:my-2">
                    <div className=" right-0 bottom-8">
                        <label htmlFor="profile_pic" className='text-black'>
                            <Add color='#516395' style={{ color: '#516395' }} />
                        </label>
                        <input
                            id="profile_pic"
                            hidden
                            type="file"
                            onChange={(e) => addImages(e)}
                            accept="image/png, image/jpeg"
                        ></input>
                    </div>
                </div>}
            </FormWrapper>
            {image.length > 0 &&
                <div className='flex justify-end'>
                    {!buttonLoading ? (
                        <button
                            onClick={onSubmitHandler}
                            type='submit'
                            className={`bg-primary rounded-sm text-white w-32 h-10 `}
                        >
                            ADD
                        </button>
                    ) : (
                        <Spinner size={40} />
                    )}
                </div>
            }
            </>
        }
        </Dashboard>
    )
}

export default AddGallery