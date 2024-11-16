const Pricing = () => {


  return (
    <div className=" w-full bg-[url('/2a16e0b917c3163cb0a8891cdd9c95b7577a8d8a')] h-lvh bg-center bg-cover  text-white flex flex-col  py-8 px-10 justify-between gap-6">

       <div className="flex flex-col justify-start gap-5 px-24 ">
       <div className="flex gap-2">
         <span className="bg-gray-800 py-1 px-3 rounded-full text-xs font-semibold text-gray-400">       
             <i className="ri-archive-2-line"></i>  Pricing
         </span>
        </div>

      <div className="flex w-full  items-end  justify-between">
      <h2 className="text-4xl font-bold  ">Simple and Flexible <br /> Pricing</h2>

      <div className="bg-[#232326] px-2 py-1 rounded-lg flex gap-2 items-center"> 
         <button className="bg-white text-black text-xs px-4 py-2 rounded-lg">
            Monthly
         </button>
         <h1 className="text-xs text-white ">Annually</h1>
        </div>
      </div>

       </div>
      

      <div className="flex justify-center items-center gap-8 ">
        


        <div className="bg-[#242426] rounded-lg p-4 w-[25%] flex flex-col gap-4 shadow-lg h-min">
          <div className="border-b border-gray-700 p-3 gap-3">
            <h3 className="text-xm  text-gray-500 ">Personal</h3>
          <p className="text-4xl font-bold text-white">
          $29 <span className="text-sm font-medium text-gray-500">per month</span>
          </p>
          <p className="text-gray-500 text-sm">For individuals and small teams looking < br/> to manage their tasks</p>
          </div>
         <div className="flex flex-col gap-5">
             <ul className=" text-white text-sm">
             This Plan Includes:
            <li className="text-gray-500 text-sm mt-2"><i className="ri-checkbox-fill"></i> Unlimited contacts</li>
            <li className="text-gray-500 text-sm mt-2"><i className="ri-checkbox-fill"></i> Bulk emailing</li>
            <li className="text-gray-500 text-sm mt-2"><i className="ri-checkbox-fill"></i> AI Integration</li>
            <li className="text-gray-500 text-sm mt-2" ><i className="ri-checkbox-fill"></i> View & share up to 3 years</li>
            <li className="text-gray-500 text-sm mt-2"><i className="ri-checkbox-fill"></i> Collaboration & permissions</li>
          </ul>
          <button className="bg-gray-700 text-gray-300 px-2 py-2 rounded-xl w-full">Get Started</button>
          </div>
        </div>



        <div className="bg-white rounded-lg p-4 w-[25%] flex flex-col gap-4 shadow-lg h-min">
          <div className="border-b border-gray-200 p-3 gap-3">
            <h3 className="text-xm  text-gray-400 ">Pro</h3>
          <p className="text-4xl font-bold text-black">
          $39 <span className="text-sm font-medium text-gray-400">per month</span>
          </p>
          <p className="text-gray-400 text-sm">For growing teams that need to track their projects' progress and hit deadlines</p>
          </div>
         <div className="flex flex-col gap-5">
             <ul className=" text-black text-sm">
             Everything in Standard, plus:
            <li className="text-gray-400 text-sm mt-2"><i className="ri-checkbox-fill"></i>Email sequences</li>
            <li className="text-gray-400 text-sm mt-2"><i className="ri-checkbox-fill"></i> Send emails from multiple domains</li>
            <li className="text-gray-400 text-sm mt-2"><i className="ri-checkbox-fill"></i> Connect multiple email accounts</li>
            <li className="text-gray-400 text-sm mt-2" ><i className="ri-checkbox-fill"></i> Fully adjustable sharing permissions</li>
            <li className="text-gray-400 text-sm mt-2"><i className="ri-checkbox-fill"></i> Migration services</li>
          </ul>
          <button className="bg-black text-white px-2 py-2 rounded-xl w-full">Get Started</button>
          </div>
        </div>


        <div className="bg-[#242426] rounded-lg p-4 w-[28%] flex flex-col gap-4 shadow-lg h-min">
          <div className="border-b border-gray-700 p-3 gap-3">
            <h3 className="text-xm  text-gray-500 ">Beyond limits</h3>
          <p className="text-4xl font-bold text-white">
          Custom Plan
          </p>
          <p className="text-gray-500 text-sm">For companies that need to manage a portfolio of work and goals across departments</p>
          </div>
         <div className="flex flex-col gap-5">
             <ul className=" text-white text-sm">
             Everything in Standard & Pro, plus:
            <li className="text-gray-500 text-sm mt-2"><i className="ri-checkbox-fill"></i>White glove onboarding</li>
            <li className="text-gray-500 text-sm mt-2"><i className="ri-checkbox-fill"></i> Custom billing</li>
            <li className="text-gray-500 text-sm mt-2"><i className="ri-checkbox-fill"></i> Dedicated slack channel</li>
            <li className="text-gray-500 text-sm mt-2" ><i className="ri-checkbox-fill"></i>Dedicated point of contact</li>
            <li className="text-gray-500 text-sm mt-2"><i className="ri-checkbox-fill"></i>Unlimited reporting</li>
          </ul>
          <button className="bg-gray-700 text-gray-300 px-2 py-2 rounded-xl w-full">Get Started</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
