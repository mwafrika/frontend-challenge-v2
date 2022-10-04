import React from 'react';

const Form = () => {
  return (
    <div className='w-[375px] h-[813px] bg-[#F6F2FF] flex flex-col overflow-y-scroll pt-[94px] overflow-x-hidden'>
      <div className='flex flex-col items-center p-0 w-[321px] h-[160px] font-[Helvetica] gap-4'>
        <h1 className='text-[36px] leading-[41px] text-center font-bold not-italic text-[#240D57]'>
          Create your
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#E87BF8] from-[#8456EC] '>
            event
          </span>{' '}
        </h1>
        <p className='w-[321px] h-[36px] text-center leading-[18px] font-light not-italic text-[16px] text-[#4F4F4F]'>
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <div>
        <form className='flex flex-col items-center gap-4'>
          <input
            type='text'
            name='event-name'
            id='event-name'
            placeholder='Event name'
            className='w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]'
          />
          <input
            type='text'
            name='host-name'
            id='host-name'
            placeholder='Host name'
            className='w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]'
          />
          <input
            type='date'
            name='start-time'
            id='start-time'
            placeholder='Start time'
            className='w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]'
          />
          <input
            type='date'
            name='end-time'
            id='end-time'
            placeholder='End time'
            className='w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]'
          />
          <input
            type='text'
            name='location'
            id='location'
            placeholder='Location'
            className='w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]'
          />

          <label class='block'>
            <span class='sr-only'>Choose profile photo</span>
            <input
              type='file'
              className='block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100
                focus:file:ring-2 focus:file:ring-offset-2
                
    '
              name='event-photo'
              id='event-photo'
            />
          </label>
          <button
            type='submit'
            className='w-[321px] h-[50px] text-[16px] text-[#FFFFFF] leading-[18px] font-light not-italic bg-[#8456EC] border-[1px] border-[#8456EC] rounded-[10px] p-[16px]'
          >
            Create event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
