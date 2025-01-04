import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

         {/* -------LEFT SECTION ------ */}
         
         <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6' >Best doctor are available here with personal consulting and good caring nurses are also availabe and we also provide home doctor services on special request</p>

         </div>

         {/* ------CENTER SECTION------ */}
         
         <div>
            <p className='text-xl font-medium md-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
            

         </div>

         {/* -----RIGHT SECTION----- */}

         <div>
            <p className='text-xl font-medium md-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+977-9845038621</li>
                <li>hospitalappoinment@gmail.com</li>
            </ul>

         </div>
        </div>

         {/* ------ Copy Right Text ----- */}
        <div>
           <hr />
           <p className='py-5 text-sm text-center'>Coptright 2025@ Hospitalappoinment -All Right Reserved. </p>

        </div>
    </div>
  )
}

export default Footer