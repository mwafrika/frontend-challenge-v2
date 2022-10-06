import React from 'react';

const notFound = () => (
  <div className='flex w-[375px] h-[813px] justify-center pt-[100px] bg-[#FBFAFF]'>
    <div className='flex w-[300px] h-[150px] rounded-xl bg-gradient-to-r to-[#E87BF8] from-[#8456EC]'>
      <div className='flex flex-col justify-center items-center w-[150px] h-[150px] mx-auto'>
        <h1 className='text-[36px] leading-[41px] text-center font-bold not-italic text-[#FFFFFF]'>
          404
        </h1>
        <p className='w-[321px] h-[36px] text-center leading-[18px] font-light not-italic text-[16px] text-[#FFFFFF]'>
          Page not found
        </p>
      </div>
    </div>
  </div>
);

export default notFound;
