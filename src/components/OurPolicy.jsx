import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      {/* Easy Exchange Policy Section */}
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt='Easy Exchange Icon' />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle-free exchange policy</p>
      </div>
      
      {/* 7 Days Return Policy Section */}
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt='Quality Assurance Icon' />
        <p className='font-semibold'>7 Days Policy</p>
        <p className='text-gray-400'>We provide a 7 days free return policy</p>
      </div>
      
      {/* Customer Support Section */}
      <div>
        <img src={assets.support_icon} className='w-12 m-auto mb-5' alt='Customer Support Icon' />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  );
}

export default OurPolicy;