import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { deleteproduct, getallCategories, update } from '../../features/productapi';
import CancelIcon from '@mui/icons-material/Cancel';
import { deletepopularproduct, updatepopularproduct, updatepopularproductimage } from '../../features/popularproductapi';

export default function PopularProductEditPage() {
  const navigate=useNavigate()
  const state = useLocation();
  const [sides, setsides] = useState(state.state.sides);
  const [productname, setproductname] = useState(state.state.product.name);
  const [productdescription, setproductdescription] = useState(state.state.product.description)
  const [productprice, setproductprice] = useState(state.state.product.price)
  const [productimages, setproductimages] = useState(state.state.product.images);
  const [category, setcategory] = useState(state.state.product.category)
  const [categories, setcategories] = useState([]);
  const [isdropOpen, setisdropOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [present, setpresent] = useState(undefined);
  const [uploadedimage, setuploadedimage] = useState("")

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
    updatepopularproductimage({_id:state.state.product._id,image:data.secure_url,});
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
          <div className='flex justify-between items-center w-[100%]'>
            <h1 className='font-bold text-2xl'>{state.state.product.name}</h1>
            <button className='flex items-center w-32 h-8 justify-center outline-none border-none text-white bg-red-800 rounded-3xl' onClick={()=>{
              deletepopularproduct({id:state.state.product._id,isRole:"admin",navigate:navigate})
            }}>
              Delete
            </button>
          </div>
          <p className='text-lg my-1 mt-4'>Product Name:</p>
          <input type="text" id='name' name='name' value={productname} onChange={(e) => setproductname(e.target.value)} className='w-80 h-10 border outline-none px-4   placeholder:items-center' placeholder='Product Name' />
          <p className='text-lg my-1 mt-4'>Product description:</p>
          <textarea type="text" id='name' name='name' value={productdescription} onChange={(e) => setproductdescription(e.target.value)} className='w-80 h-28 border outline-none px-4   placeholder:items-center' placeholder='Product Name' />
          <p className='text-lg my-1 mt-4'>Product Price:</p>
          <input type="text" id='name' name='name' value={productprice} onChange={(e) => setproductprice(e.target.value)} className='w-80 h-10 border outline-none px-4   placeholder:items-center' placeholder='Product Name' />
          <p className='text-lg my-1 mt-4'>Category:</p>
          <div className='relative'>
            <p className='font-medium cursor-pointer flex flex-row h-10 w-80 border border-gray-300 justify-between items-center px-4 ' onClick={() => setisdropOpen(!isdropOpen)}>{category} {isdropOpen === false ? (<ArrowDropDownIcon />) : (<ArrowDropUpIcon />)}</p>
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
            {productimages.map((image) => {
              return <div className='relative'>
                <img src={image} alt="" className=' h-28 border border-gray-300 p-2 object-cover' />

                <CancelIcon onClick={()=>{
                let updateimges=  productimages.filter((item)=>item!==image);
                setproductimages(updateimges);
                }} className='cursor-pointer absolute top-1 right-1 z-10 ' />
              </div>
            })}
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
                 updatepopularproduct({_id:state.state.product._id,category:category,images:productimages,description:productdescription,isRole:"admin",name:productname,navigate,price:productprice})

              if(selectedImage===null){
   updatepopularproduct({_id:state.state.product._id,category:category,images:productimages,description:productdescription,isRole:"admin",name:productname,navigate,price:productprice})
               } else
               if(uploadedimage===""){
                 uploadimage().then(()=>{
                 
                   updatepopularproduct({_id:state.state.product._id,category:category,images:productimages,description:productdescription,isRole:"admin",name:productname,navigate,price:productprice})
   
                  });
   
                }else{
                  updatepopularproduct({_id:state.state.product._id,category:category,images:productimages,description:productdescription,isRole:"admin",name:productname,navigate,price:productprice})
                }
              
            }}>Save</button>
          </div>

        </div>
      </div>
    </>
  )
}
