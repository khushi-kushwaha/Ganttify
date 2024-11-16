import React from 'react'

const Form = () => {
  return (
    <div className='h-screen bg-center bg-cover flex gap-14 justify-center pt-20' style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/974e/d41b/38c8036ad37cb7df9603a15b873551fa?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKLvGlqc85CRewOZWtTWk~P37HBRR58-OSZwOOYYVAxfQOI6tlFLDTp3c6R2gcXUF3HeHUvlCiJC4vTopHjJP23WO3S3bf~vmDJnkHRrjUGhPfgmaKTZXnfwAMu0WVOl-y3aJBO0YrniZBsKbGmCpZXLzar7nKy-GpIPdRTDWt0tbUkc6mLBMBE08zMa~4Uaf76IFqC7EFGcduwzhKNpahZGUJnRpIA9yQH15LPSxirqyjX~0THAoaYFQdu7zl4WoFmSavbtknkCvqxtRqJxULD0kxDch3R9igvIoFsPW~byNSIN99taosnXz09ltSJOYmsBjSYt3JetNoPEMQkGbQ__')` }}>
        <div className='flex flex-col gap-8 w-[40%] ' >
        <div className="flex justify-start">
          <span className="bg-gray-800 py-1 px-3 rounded-full text-xs font-semibold text-gray-400">
          <i className="ri-headphone-line"></i> Contact
          </span>
        </div>
        
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
          Get in Touch with Us
          </h1>
          <p className="text-gray-400">
          Ganttify enables you to achieve clarity and significant results on a large scale by linking tasks and workflows to the overarching objectives of the company
          </p>

        </div>

        <div className='bg-white h-[80%] w-max p-4 rounded-xl '>
        <form>
          <div className="flex gap-4 mb-4 ">
            <div className="flex-1">
              <label className="block mb-2 text-sm  text-gray-500">First name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-sm  text-gray-500">Last name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm  text-gray-500">Email</label>
            <input
              type="email"
              placeholder="johndoe@mail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-500">Problem Descriptions</label>
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
        </div>
    </div>
  )
}

export default Form