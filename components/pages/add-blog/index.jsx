import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import InputField from "../../UI/InputField";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Divider } from "@mui/material";
import Image from "next/image";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";

// import ReactQuill from 'react-quill';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const AddBlog = () => {
  const styles = {
    minHeight: "500px",
    background: "white",
    color: "black",
    padding: "16px",
    borderRadius: "4px",
  };

  const initialValues = {
    head: {
      title: "",
      description: "",
      keywords: "",
      author: "",
    },
    category: "SEO",
    pageSlug: "",
    title: "",
  };

  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const [fetchValues, setFetchedValues] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/blog/" + id);
        setFetchedValues({
          head: response.data.data.head,
          title: response.data.data.title,
          category: response.data.data.category,
          pageSlug: response.data.data.pageSlug,
        });
        // setImagePreview(response.data.data.image.secure_url);
        setValue(response.data.data.postContent);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (!image) {
      setImagePreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setImagePreview(objectUrl);
  }, [image]);

  const validationSchema = Yup.object({
    head: Yup.object({
      title: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      keywords: Yup.string().required("Required"),
      author: Yup.string().required("Required"),
    }),
    category: Yup.string().required("Required"),
    pageSlug: Yup.string()
      .required("Required")
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "No space allowed"),
    title: Yup.string().required("Required"),
  });

  const onSubmitHandler = async (values) => {
    // if(!imagePreview && !id){
    //   toast.error('Please upload an image')
    //   return;
    // }
    try {
      // const formData = new FormData();
      // if(image)formData.append('image', image);
      // else formData.append('image', imagePreview);
      // formData.append('head.title', values.head.title);
      // formData.append('head.description', values.head.description);
      // formData.append('head.keywords', values.head.keywords);
      // formData.append('head.author', values.head.author);
      // formData.append('category', values.category);
      // formData.append('pageSlug', values.pageSlug);
      // formData.append('title', values.title);
      // formData.append('postContent', value);

      let response, data;
      if (id)
        response = await axios.put(`/api/blog`, {
          id: id,
          ...values,
          postContent: value,
        });
      else {
        if (!image) {
          toast.error("Please select an Image");
          return;
        }
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "client-uploads");
        try {
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/da75fckow/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
          data = await res.json();
        } catch (err) {
          console.log(err);
        }
        values.image = data;
        response = await axios.post("/api/blog", {
          ...values,
          postContent: value,
        });
      }
      if (id) toast.success("Updated Successfully");
      else toast.success("Added Successfully");
      router.push("/dashboard/all-blogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <h1 id="Ubuntu" className="text-4xl font-bold">
        ADD BLOG PAGE
      </h1>
      <Divider />
      <Formik
        initialValues={fetchValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
        enableReinitialize
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <Form className="flex flex-col gap-4">
              <h2 className="bg-white rounded-lg py-4 px-4 text-2xl font-bold">
                Head
              </h2>
              <React.Fragment>
                <InputField
                  uni="head.title"
                  labelName="Title"
                  fieldRequired={true}
                  placeholder="Title"
                />
                <InputField
                  uni="head.description"
                  labelName="Description"
                  fieldRequired={true}
                  placeholder="Description"
                />
                <InputField
                  uni="head.keywords"
                  labelName="Keywords"
                  fieldRequired={true}
                  placeholder="Keywords"
                />
                <InputField
                  uni="head.author"
                  labelName="Author"
                  fieldRequired={true}
                  placeholder="Author"
                />
              </React.Fragment>

              <h2 className="bg-white rounded-lg py-4 px-4 text-2xl font-bold">
                Additional
              </h2>
              <React.Fragment>
                <InputField
                  uni="title"
                  labelName="Title"
                  fieldRequired={true}
                  placeholder="Title"
                />
                <InputField
                  uni="pageSlug"
                  labelName="Page Slug"
                  fieldRequired={true}
                  placeholder="Page Slug"
                />
                <InputField
                  uni="category"
                  labelName="Category"
                  fieldRequired={true}
                  placeholder="Category"
                  override={true}
                  as="select"
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="SEO">SEO</option>
                  <option value="Link-Building">Link Building</option>
                  <option value="Content-Marketing">Content Marketing</option>
                  <option value="Guest-Posting">Guest Posting</option>
                  <option value="Digital-Marketing">Digital Marketing</option>
                  <option value="Social-Media-Marketing">
                    Social Media Marketing
                  </option>
                  <option value="Email-Marketing">Email Marketing</option>
                  <option value="PPC">PPC</option>
                  <option value="Web-Design">Web Design</option>
                  <option value="News">News</option>
                  <option value="Others">Others</option>
                </InputField>
              </React.Fragment>

              <h2 className="bg-white rounded-lg py-4 px-4 text-2xl font-bold">
                Blog
              </h2>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />

              {/* {imagePreview && <Image  src={imagePreview} alt='image preview' width={auto} className='w-full md:w-60' />} */}
              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="image preview"
                  width={600}
                  height={400}
                  className="w-full md:w-60"
                />
              )}

              <ReactQuill
                style={styles}
                theme="snow"
                value={value}
                onChange={setValue}
              />

              <div className="self-end">
                <button
                  type="submit"
                  className="bg-black text-white rounded-lg py-2 px-4"
                >
                  {id ? "Update" : "Submit"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddBlog;
