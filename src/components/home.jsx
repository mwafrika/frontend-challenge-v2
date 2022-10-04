import { useState } from 'react';

function App() {
  return (
    <div className='w-[375px] h-[813px] bg-[#F6F2FF] flex flex-col overflow-y-scroll pt-[94px]'>
      <div className='flex flex-col items-center p-0 w-[321px] h-[160px] font-[Helvetica] gap-4'>
        <h1 className='text-[36px] leading-[41px] text-center font-bold not-italic text-[#240D57]'>
          Imagine if
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#E87BF8] from-[#8456EC] '>
            Snapchat
          </span>{' '}
          <br />
          had events.
        </h1>
        <p className='w-[321px] h-[36px] text-center leading-[18px] font-light not-italic text-[16px] text-[#4F4F4F]'>
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <div>
        <img
          src='/home.svg'
          alt='home'
          className='w-[165.63px] h-[292px] mx-auto'
        />
      </div>
      <button className='py-[16px] px-[21px] text-[16px] text-[#FFFFFF] leading-[18px] font-bold'>
        🎉 Create my event
      </button>
    </div>
  );
}

export default App;
