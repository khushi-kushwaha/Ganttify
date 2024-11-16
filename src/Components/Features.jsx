import React from 'react'

const Features = () => {
  return (
    <>
    <div className='bg-white h-min flex flex-col py-10 px-32 gap-2'>
        <div className='flex flex-col gap-3 items-start'>
        <div className="flex justify-start">
          <span className="bg-white border border-gray-300 py-1 px-3 rounded-lg text-xs font-semibold text-gray-400">
          <i className="ri-box-3-line"></i>   Features
          </span>
        </div>
        
          <h1 className=" text-center lg:text-5xl font-bold leading-tight text-black">
          Everything Your Team Looking For 
          </h1>
          <p className="text-gray-500">
          Ganttify’s exceptional flexibility can handle any type of work. And we never stop innovating
          </p>
      
       </div>    
    </div>
    <div className='flex flex-wrap gap-10 items-center justify-center py-10'>
    <div className='w-[38%] flex flex-col gap-4'>
      <img src="/Illustration.png" />
      <div className='flex flex-col gap-2 mt-2'>
        <h1 className='text-xl font-semibold'>Project Management</h1>
        <p className='font-xm text-gray-500'>Manage your projects from start to finish.With all of your projects in Ganttity, you'll always know who's doing what by when</p>
      </div>
      
    </div>
    <div className='w-[38%] flex flex-col gap-4'>
      <img src="/Illustration(4).png" />
      <div className='flex flex-col gap-2 mt-2'>
        <h1 className='text-xl font-semibold'>Workflows and Automations</h1>
        <p className='font-xm text-gray-500'>Create more efficient processes so you can seamlessly manage projects across departments and get more done in less time </p>
      </div>
      
    </div>
    <div className='w-[38%] flex flex-col gap-4'>
      <img src="/Illustration (1).png" />
      <div className='flex flex-col gap-2 mt-2'>
        <h1 className='text-xl font-semibold'>Goals and Reporting</h1>
        <p className='font-xm text-gray-500'>See how each project and portfolio ladders up to company objectives and keep everyone focused on the work that matters</p>
      </div>
      
    </div>
    <div className='w-[38%] flex flex-col gap-4'>
      <img src="/Illustration (3).png" />
      <div className='flex flex-col gap-2 mt-2'>
        <h1 className='text-xl font-semibold'>Resource Management</h1>
        <p className='font-xm text-gray-500'>Get the visiblity you need to plan accurate timelines, adjust workloads, and stay on track to achieve your objectives</p>
      </div>
      
    </div>
  </div>
  </>
  )
}

export default Features