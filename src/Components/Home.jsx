import React from 'react'

const Home = () => {
  return (
    <div className='h-screen flex flex-col gap-2'>
    <div className='Nav flex justify-between items-center px-4 py-4 '>
          <div className='Nav-left flex items-center  gap-8'>
            <img src="/Logo (1).png" alt="logo"/>
            <div className='flex itmes-center gap-5 text-sm font-medium'>
            <a href="#" >Product</a>
            <a href="#">Solutions</a>
            <a href="#">Resources</a>
            <a href="#">Company</a>
            <a href="#">Pricing</a>
            </div>
          </div>
          <div className='Nav-right flex gap-3'>
            <button className='border rounded-lg py-1 px-2 border-gray-400 font-medium text-sm'>Sign In</button>
            <button className='bg-black text-white rounded-lg py-1 px-2 font-medium text-sm'>Get Started</button>
          </div>
    </div>

    <div className="bg-[url('/fadr2jto.png')] bg-cover bg-center  h-[90%] w-full flex items-center justify-evenly">
      
    <div className='h-[80%] w-[40%] flex flex-col justify-between'>


     <div className='flex flex-col gap-8'>
        <div className="flex justify-start">
          <span className="bg-gray-800 py-1 px-3 rounded-full text-xs font-semibold text-gray-400">
          <i className="ri-crosshair-line"></i>   Goals & Reporting
          </span>
        </div>
        
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
            Goals and Reporting<br />In One Place
          </h1>
          <p className="text-gray-400">
            Connect every team's work to company objectives, then track progress with real-time data.
          </p>
        
        <div className="flex space-x-4">
          <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
            Get Started
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700">
            How it Works
          </button>
        </div>
      </div>
      
      <div className=" ">
            <p className="text-sm font-semibold text-gray-400">Trusted by 2 million+ teams</p>
            <div className="flex items-center space-x-4 mt-4">
             <img src="/Screenshot (197)3.png" alt=""/> 
            </div>
      
      </div>
      </div>


    <div className='h-[80%] w-[40%] '>
   <div className='relative  flex flex-wrap h-full w-full gap-5 justify-center items-end p-2 '>

    <div className='absolute -top-1 left-48 rotate-12  border border-gray-500 bg-[#414143] text-xl text-gray-500 rounded-lg shadow-lg px-2 py-1 '><i className="ri-timer-fill"></i></div>    
    <div className='absolute top-80 left-2 -rotate-12 bg-[#414143]  border border-gray-500 text-xl text-gray-500 rounded-lg shadow-lg px-2 py-1 '><i className="ri-menu-search-fill"></i></div>    
    <div className='absolute top-96 -right-2 bg-[#414143] rotate-12 border border-gray-500 text-xl text-gray-500 rounded-lg shadow-lg px-2 py-1 '><i className="ri-calendar-2-line"></i></div>    



    <div className='bg-white rounded-lg h-[47%] w-[32%] flex flex-col items-center justify-center gap-2 '>
      <div className='h-[40%] w-[80%] shadow-lg  rounded-lg p-1'>
        <div className='bg-[#7263ec] text-white w-min px-1 h-min rounded'><i className="ri-eye-fill"></i></div>
        <h1 className='text-xl font-medium text-black-300'>5,089</h1>
        <div className='text-[9px] flex justify-between items-center text-gray-600'><h6>Viewers</h6> <h6 className='bg-gray-100 rounded-lg'>+12.3%</h6></div>
      </div>

      <div className='h-[40%] w-[80%] shadow-lg rounded-lg p-1'>
      <div className='bg-[#7263ec] text-white w-min px-1 h-min rounded'><i className="ri-bar-chart-2-fill"></i></div>
        <h1 className='text-xl font-medium text-black-300'>89.90%</h1>
        <div className='text-[9px] flex justify-between items-center text-gray-600'><h6>Conversions</h6> <h6 className='bg-gray-100 rounded-lg'>+101%</h6></div>
      </div>
       </div>
    <div className='bg-white rounded-lg h-[58%] w-[40%] p-3 flex flex-col justify-between items-start'>
      <div> <h6 className='text-xs text-gray-400'>Spending per month</h6><h1 className='text-xl font-semibold'>$4,567</h1></div>
      <div className=" bg-cover bg-center h-[65%] w-full flex flex-col gap-6 items-center justify-center" style={{ backgroundImage: `url('/Frame 33853.png')` }} >
       <div className='bg-cover bg-center' style={{ backgroundImage: `url('/Vector 3.png')` }} >
        <img  src='/Vector 1.png'></img>
       </div>
       <div className='bg-cover bg-center' style={{ backgroundImage: `url('/Vector 4.png')` }}>
       <img src='/Vector 2.png'></img>
       </div>
     </div>

    </div>
    <div className='bg-white rounded-lg h-[30%] w-[60%] mb-4 p-2 flex flex-col justify-between'>
      <div className='h-min w-full flex gap-2 mb-1'>
        <div className='bg-red-400 rounded-full h-[15px] w-[5%]'></div>
        <div className='bg-yellow-400 rounded-full h-[15px] w-[5%]'></div>
        <div className='bg-green-400 rounded-full h-[15px] w-[5%]'></div>

      </div>
      <div className='rounded-lg p-1 flex justify-between items-center bg-gray-100 font-lg '><h1 className='font-semibold'>🚀 Users newly onboarded</h1> <h2>2 days ago</h2></div>
      <div className='rounded-lg p-1 flex justify-between items-center bg-gray-100 font-lg'><h1 className='font-semibold'>💰 Made an purchase</h1> <h2>5 days ago</h2></div>
    </div>
   </div>

    </div>

    </div>
    </div>
  )
}


export default Home