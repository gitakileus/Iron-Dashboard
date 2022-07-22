import React from "react"
import { ReactComponent as LogoTwo } from 'icons/logo2.svg';
import { ReactComponent as Vector1 } from 'icons/Vector (1).svg';
import { ReactComponent as Vector2 } from 'icons/Vector (2).svg';
import { ReactComponent as Vector3 } from 'icons/Vector (3).svg';
import { ReactComponent as Vector4 } from 'icons/Vector (4).svg';
import { ReactComponent as Vector5 } from 'icons/Vector (5).svg';

const Footer = () => {
  return(
    <div className='w-[1454px] mx-auto'>
      <div className='flex items-center justify-between  border-b-[1px] border-b-[#E1E1E1] h-[256px]'>
        <div>
          <LogoTwo />
          <p className='text-[#1D0070] mt-5 font-normal text-xs'>Iron Fish is a novel cryptocurrency focused on privacy and accessibility</p>
        </div>
        <div>
          <ul className='text-[#1D0070] font-normal text-base grid gap-[10px]'>
            <li className='text-xl'>Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul className='text-[#1D0070] font-normal text-base grid gap-[10px]'>
            <li className='text-xl'>Product</li>
            <li>Block Explorer</li>
            <li>Whitepaper</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <button className='bg-black py-[10px] px-5 font-normal text-base text-white rounded-full'>Drop us a line</button>
        </div>
      </div>
      <div className='flex justify-between h-[65px] items-center mb-32'>
        <p className='text-[#1D0070] font-normal text-xs'>2021 Iron Fish. All rights reserved.</p>
        <div className='flex gap-[22px]'>
          <Vector1 />
          <Vector2 />
          <Vector3 />
          <Vector4 />
          <Vector5 />
        </div>
      </div>
    </div>
  )
}

export default Footer;