import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0D0D12] py-10 px-20 flex flex-col justify-between h-screen'>
        <div className='flex justify-between items-center'>
            <img className="text-white" src="/Logo.png"/>
            <div className='text-gray-500 text-xm flex gap-2'>
            <i className="ri-twitter-x-line  border border-gray-500 rounded px-1"></i>
            <i className="ri-facebook-circle-fill border border-gray-500 rounded px-1"></i>
            <i className="ri-instagram-fill border border-gray-500 rounded px-1"></i>
            </div>
        </div>
        <div className='h-[65%]  flex gap-32 border-b border-gray-500'>
            <div className='flex flex-col gap-3'>
                <h1 className='font-semibold text-xm text-white'>Ganttity</h1>
                <a href="#" className='text-gray-500'>Home</a>
                <a href="#" className='text-gray-500'>Product</a>
                <a href="#" className='text-gray-500'>Pricing</a>
                <a href="#" className='text-gray-500'>Customer Success</a>
                <a href="#" className='text-gray-500'>Templates</a>
                <a href="#" className='text-gray-500'>Trust and Security</a>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-semibold text-xm text-white'>Solutions</h1>
                <a href="#" className='text-gray-500'>Project Management</a>
                <a href="#" className='text-gray-500'>Goal Management</a>
                <a href="#" className='text-gray-500'>Agile Management</a>
                <a href="#" className='text-gray-500'>Task Management</a>
                <a href="#" className='text-gray-500'>Productivity</a>
                <a href="#" className='text-gray-500'>Work Management</a>
                <a href="#" className='text-gray-500'>Project Planning</a>
                <a href="#" className='text-gray-500'>To Do Lists</a>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-semibold text-xm text-white'>About Us</h1>
                <a href="#" className='text-gray-500'>Company</a>
                <a href="#" className='text-gray-500'>Leadership</a>
                <a href="#" className='text-gray-500'>Customers</a>
                <a href="#" className='text-gray-500'>Careers</a>
                <a href="#" className='text-gray-500'>Changelog</a>
                
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-semibold text-xm text-white'>Resources</h1>
                <a href="#" className='text-gray-500'>Help Center</a>
                <a href="#" className='text-gray-500'>FAQ</a>
                <a href="#" className='text-gray-500'>Developers & API</a>
                <a href="#" className='text-gray-500'>Community</a>
                <a href="#" className='text-gray-500'>Events</a>
                <a href="#" className='text-gray-500'>Status</a>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-semibold text-xm text-white'>Helpful Links</h1>
                <a href="#" className='text-gray-500'>Legal center</a>
                <a href="#" className='text-gray-500'>Privacy policy</a>
                <a href="#" className='text-gray-500'>Partnerships</a>
            </div>
        </div>
        <div className='flex justify-between w-full h-min'>
            <div className='flex items-center text-white bg-gray-900 rounded py-1 px-2 gap-1'>
                <div className='rounded-full h-5 w-5 bg-center bg-cover' style={{ backgroundImage: `url('https://cdn.britannica.com/81/4481-004-660915ED/flag-Stars-and-Stripes-July-4-1912.jpg')` }}>
                </div>
                <h1 className='text-sm'>United States</h1>
                <i className="ri-arrow-drop-down-line text-gray-500"></i>
            </div>
           <h5 className='text-gray-500 text-sm'>© Ganttify 2024. All Rights Reserved</h5>
        </div>
    </div>
  )
}

export default Footer