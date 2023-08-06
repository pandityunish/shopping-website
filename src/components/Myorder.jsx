import React,{useEffect} from 'react';
import NavBar from './NavBar';
import { getuserOrder } from '../features/productapi';
import { useState } from 'react';

const MyOrderPage = () => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        let email=localStorage.getItem("email")
        getuserOrder({setOrder,email})
    }, [])
    
    
    
      return (
        
        <div className="min-h-screen bg-gray-100">
            <NavBar/>
          <header className="bg-white shadow mt-3 ">
            <div className="container mx-auto px-4 py-6">
              {/* Add your header content here */}
              <h1 className="text-2xl font-bold text-gray-800 text-center">My Orders</h1>
            </div>
          </header>
    
          <main className="container mx-auto py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {order.map((order) => {
                const dateObj = new Date(order.createdAt);
              return  <div
                  key={order.id}
                  className="bg-white rounded-lg flex justify-between shadow p-4 cursor-pointer hover:shadow-lg"
                >
                    <div>
                  <div className="text-lg font-semibold mb-2">{order._id}</div>
                  <div className="text-gray-600 mb-2">Date: {dateObj.toLocaleString( { weekday: 'long' })}</div>
                  <div className="text-gray-800 font-bold">Total: Rs {order.totalprice}</div>
                  </div>
                  <div>
                  {order.isCompleted==false? <div
                  className='bg-green-400 p-1 shadow-sm rounded-md text-white'
                  >Processing</div>:<div className='bg-green-400 p-1 shadow-sm rounded-md text-white'>Completed</div>}
                  </div>
                </div>
})}
            </div>
          </main>
    
          
        </div>
      );
    };

export default MyOrderPage;
