import React from 'react'

const Customer = () => {
  return (
    <>
        <div className='flex flex-col gap-2 justify-center items-center  h-56'>
        <div className="flex justify-start">
          <span className="bg-white border border-gray-300 py-1 px-3 rounded-lg text-xs font-semibold text-gray-400">
          <i className="ri-user-line"></i>   Customers
          </span>
        </div>
        
          <h1 className=" text-center lg:text-4xl font-bold leading-tight text-black">
          See What Our Customers <br /> Are Saying
          </h1>
          <p className="text-gray-500">
          Here's what some of our customers say about our platform.
          </p>
      
       </div>
      <div className="relative flex flex-wrap gap-3 justify-center items-center h-max pt-10 pb-20">
          

        <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      
        <div className="flex items-center mb-4">
        <div className="flex text-blue-700">
          
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.47l2.5 7.39h7.8l-6.3 4.57 2.5 7.39-6.3-4.57-6.3 4.57 2.5-7.39-6.3-4.57h7.8l2.5-7.39z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-gray-600">4.8</span>
      </div>

      <p className="text-gray-800 text-sm mb-6 font-medium">
        “Ganttify has revolutionized the way we manage our projects. Connecting
        tasks and workflows to our overall company goals has never been easier.”
      </p>

      
      <div className="flex items-center">
        <img
          src="/Avatars Base.png"
          alt="Charlotte Hanlin"
          className="w-8 h-8 rounded-full mr-3"
        />
        <div>
          <p className="text-gray-900 font-medium">Charlotte Hanlin</p>
          <p className="text-gray-500 text-xs">Co-Founder, Harness Digital</p>
        </div>
      </div>
         </div>
         <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      
      <div className="flex items-center mb-4">
      <div className="flex text-blue-700">
        
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.47l2.5 7.39h7.8l-6.3 4.57 2.5 7.39-6.3-4.57-6.3 4.57 2.5-7.39-6.3-4.57h7.8l2.5-7.39z" />
          </svg>
        ))}
      </div>
      <span className="ml-2 text-gray-600">4.8</span>
    </div>

    <p className="text-gray-800 text-sm mb-6 font-medium">
    “Using Ganttify has streamlined our project manage process.It’s incredibly effective in aligning our daily tasks with the company's strategic goals.”
    </p>

    
    <div className="flex items-center">
      <img
        src="/Avatars Base (1).png"
        alt="Charlotte Hanlin"
        className="w-8 h-8 rounded-full mr-3"
      />
      <div>
        <p className="text-gray-900 font-medium">Eleanor Pena</p>
        <p className="text-gray-500 text-xs">Co-Founder, Heroes Digital</p>
      </div>
    </div>
       </div>
       <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      
      <div className="flex items-center mb-4">
      <div className="flex text-blue-700">
        
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.47l2.5 7.39h7.8l-6.3 4.57 2.5 7.39-6.3-4.57-6.3 4.57 2.5-7.39-6.3-4.57h7.8l2.5-7.39z" />
          </svg>
        ))}
      </div>
      <span className="ml-2 text-gray-600">4.8</span>
    </div>

    <p className="text-gray-800 text-sm mb-6 font-medium">
    “Ganttify has provided us with a unified view of our projects. It connects our workflows directly 
    to our business goals, making it easier to track progress.”
    </p>

    
    <div className="flex items-center">
      <img
        src="/Avatars Base (2).png"
        alt="Charlotte Hanlin"
        className="w-8 h-8 rounded-full mr-3"
      />
      <div>
        <p className="text-gray-900 font-medium">Guy Hawkins</p>
        <p className="text-gray-500 text-xs">Co-Founder, Heroes Digital</p>
      </div>
    </div>
       </div>
       
       <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      
      <div className="flex items-center mb-4">
      <div className="flex text-blue-700">
        
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.47l2.5 7.39h7.8l-6.3 4.57 2.5 7.39-6.3-4.57-6.3 4.57 2.5-7.39-6.3-4.57h7.8l2.5-7.39z" />
          </svg>
        ))}
      </div>
      <span className="ml-2 text-gray-600">4.8</span>
    </div>

    <p className="text-gray-800 text-sm mb-6 font-medium">
      “Ganttify has revolutionized the way we manage our projects. Connecting
      tasks and workflows to our overall company goals has never been easier.”
    </p>

    
    <div className="flex items-center">
      <img
        src="/Avatars Base.png"
        alt="Charlotte Hanlin"
        className="w-8 h-8 rounded-full mr-3"
      />
      <div>
        <p className="text-gray-900 font-medium">Charlotte Hanlin</p>
        <p className="text-gray-500 text-xs">Co-Founder, Harness Digital</p>
      </div>
    </div>
       </div>
       <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
    
    <div className="flex items-center mb-4">
    <div className="flex text-blue-700">
      
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.47l2.5 7.39h7.8l-6.3 4.57 2.5 7.39-6.3-4.57-6.3 4.57 2.5-7.39-6.3-4.57h7.8l2.5-7.39z" />
        </svg>
      ))}
    </div>
    <span className="ml-2 text-gray-600">4.8</span>
  </div>

  <p className="text-gray-800 text-sm mb-6 font-medium">
  “Using Ganttify has streamlined our project manage process.It’s incredibly effective in aligning our daily tasks with the company's strategic goals.”
  </p>

  
  <div className="flex items-center">
    <img
      src="/Avatars Base (1).png"
      alt="Charlotte Hanlin"
      className="w-8 h-8 rounded-full mr-3"
    />
    <div>
      <p className="text-gray-900 font-medium">Eleanor Pena</p>
      <p className="text-gray-500 text-xs">Co-Founder, Heroes Digital</p>
    </div>
  </div>
     </div>
     <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
    
    <div className="flex items-center mb-4">
    <div className="flex text-blue-700">
      
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.47l2.5 7.39h7.8l-6.3 4.57 2.5 7.39-6.3-4.57-6.3 4.57 2.5-7.39-6.3-4.57h7.8l2.5-7.39z" />
        </svg>
      ))}
    </div>
    <span className="ml-2 text-gray-600">4.8</span>
  </div>

  <p className="text-gray-800 text-sm mb-6 font-medium">
  “Ganttify has provided us with a unified view of our projects. It connects our workflows directly 
  to our business goals, making it easier to track progress.”
  </p>

  
  <div className="flex items-center">
    <img
      src="/Avatars Base (2).png"
      alt="Charlotte Hanlin"
      className="w-8 h-8 rounded-full mr-3"
    />
    <div>
      <p className="text-gray-900 font-medium">Guy Hawkins</p>
      <p className="text-gray-500 text-xs">Co-Founder, Heroes Digital</p>
    </div>
  </div>
     </div>
          
    <div className='absolute h-[50%] bottom-0 left-0 right-0  bg-white bg-opacity-50 z-10'></div>


      </div>
    </>
  )
}

export default Customer