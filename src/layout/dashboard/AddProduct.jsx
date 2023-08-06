import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { getallCategories, postproduct, update } from '../../features/productapi';
import CancelIcon from '@mui/icons-material/Cancel';

export default function AddProduct() {
  const navigate=useNavigate()
  const state = useLocation();
  const [sides, setsides] = useState("");
  const [productname, setproductname] = useState("");
  const [productdescription, setproductdescription] = useState("")
  const [productprice, setproductprice] = useState("")
  const [productimages, setproductimages] = useState("");
  const [category, setcategory] = useState("")
  const [categories, setcategories] = useState([]);
  const [rate, setrate] = useState("")
  const [isdropOpen, setisdropOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [present, setpresent] = useState(undefined);
  const [uploadedimage, setuploadedimage] = useState("")
  const [allimages, setallimages] = useState([])
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setpresent(file);
  };
  const uploadimage = async () => {
    const formated = new FormData();
    formated.append('file', present);
    formated.append("upload_preset", "wbietaqw");
    const data = await fetch('https://api.cloudinary.com/v1_1/dsqtxanz6/image/upload', {
      method: 'POST',
      body: formated
    }).then(r => r.json());
    console.log(data);
    setuploadedimage(data.secure_url);
    allimages.push(data.secure_url);
    postproduct({name:productname,description:productdescription,price:productprice,images:allimages,category:category,isRole:"admin",navigate:navigate,rating:rate})

  }
  useEffect(() => {
    getallCategories({ setcategories });
  }, [])
  return (
    <>
      <NavBar />
      <div className='flex mx-20 mt-14 justify-between'>

        <div className='w-[20%] flex flex-col items-start h-[90%]    p-4 gap-3 border-[2px]  border-black '>
          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Products" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Products")
          }}><h1 className='font-medium'>Products</h1></div>

          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Popular Products" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Popular Products")
          }}> <h1 className='font-medium'>Popular Products</h1></div>
          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Sliders" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Sliders")
          }}>   <h1 className='font-medium'>Sliders</h1></div>
          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Category" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Category")
          }}>  <h1 className='font-medium'>Category</h1></div>
          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Orders" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Orders")
          }}> <h1 className='font-medium'>Orders</h1></div>
        </div>
        <div className='flex flex-col w-[70%]'>
          <h1 className='font-bold text-2xl'>Create Product</h1>
          <p className='text-lg my-1 mt-4'>Product Name:</p>
          <input type="text" id='name' name='name' value={productname} onChange={(e) => setproductname(e.target.value)} className='w-80 h-10 border outline-none px-4   placeholder:items-center' placeholder='Product Name' />
          <p className='text-lg my-1 mt-4'>Product description:</p>
          <textarea type="text" id='name' name='name' value={productdescription} onChange={(e) => setproductdescription(e.target.value)} className='w-80 h-28 border outline-none px-4   placeholder:items-center' placeholder='Product Description' />
          <p className='text-lg my-1 mt-4'>Product Price:</p>
          <input type="text" id='name' name='name' value={productprice} onChange={(e) => setproductprice(e.target.value)} className='w-80 h-10 border outline-none px-4   placeholder:items-center' placeholder='Product Price' />
          <p className='text-lg my-1 mt-4'>Rate:</p>
          <input type="text" id='name' name='name' value={rate} onChange={(e) => setrate(e.target.value)} className='w-80 h-10 border outline-none px-4   placeholder:items-center' placeholder='Product Rate' />
          <p className='text-lg my-1 mt-4'>Category:</p>
          <div className='relative'>
            <p className='font-medium cursor-pointer flex flex-row h-10 w-80 border border-gray-300 justify-between items-center px-4 ' onClick={() => setisdropOpen(!isdropOpen)}>{category} {isdropOpen === false ?  (<div>Category <ArrowDropDownIcon /></div> ) : (<ArrowDropUpIcon />)}</p>
            {isdropOpen && (<div className='absolute  w-80 mt-1 bg-white z-30 border border-gray-300 rounded-md shadow-sm transition duration-500 ease-in-out'>
              {categories.map((category) => {
                return (
                  <p className='px-3 py-1 cursor-pointer text-base ' onClick={() => {

                    setcategory(category.name)
                    setisdropOpen(false)
                  }}>{category.name}  </p>
                )
              })}
            </div>)}
          </div>
          <p className='text-lg my-1 mt-4'>Images:</p>
          <div className='flex gap-3 p-3'>
            {/* {productimages.map((image) => {
              return <div className='relative'>
                <img src={image} alt="" className=' h-28 border border-gray-300 p-2 object-cover' />

                <CancelIcon onClick={()=>{
                let updateimges=  productimages.filter((item)=>item!==image);
                setproductimages(updateimges);
                }} className='cursor-pointer absolute top-1 right-1 z-10 ' />
              </div>
            })} */}
            {selectedImage && <div className='relative'>
              <img src={selectedImage} className=' h-28 border border-gray-300 p-2 object-cover' alt="Selected" />
              <CancelIcon onClick={()=>{
                setSelectedImage(null)
              }} className='cursor-pointer absolute top-1 right-1 z-10 ' />
              </div> }
          </div>
          <input type='file' onChange={handleImageChange} accept='image/*' placeholder='Upload image' />
          <div className='flex justify-end mb-3'>
            <button className='flex items-center w-32 h-8 mt-8 justify-center outline-none border-none text-white bg-green-800 rounded-3xl ' onClick={() => {
             
            
              
             if(selectedImage===null){

             }else if(uploadedimage===null){
               postproduct({name:productname,description:productdescription,price:productprice,images:allimages,category:category,isRole:"admin",navigate:navigate,rating:rate})
             }else{
               uploadimage();

             }
            }}>Save</button>
          </div>

        </div>
      </div>
    </>
  )
}
