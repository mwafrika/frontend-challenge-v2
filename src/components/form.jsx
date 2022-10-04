import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = () => {
  const [event, setEvent] = useState({
    host: '',
    location: '',
    image: '',
    endDate: '',
    event: '',
    startDate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className='w-[375px] h-[813px] bg-[#F6F2FF] flex flex-col overflow-y-scroll pt-[94px] overflow-x-hidden'>
      <Link to='/event'>
        <img
          src='/bottom/right.svg'
          alt='right'
          className='absolute top-5 left-[330px] w-[24px] h-[24px]'
        />
      </Link>
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
        <form
          className='flex flex-col items-center gap-4'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            name='event'
            placeholder='Event name'
            value={event.event}
            onChange={handleChange}
            className='w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]'
          />
          <input
            type='text'
            name='host'
            placeholder='Host name'
            value={event.host}
            onChange={handleChange}
            className='w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]'
          />
          <input
            type='date'
            name='startDate'
            value={event.startDate}
            onChange={handleChange}
            placeholder='Start time'
            className='w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]'
          />
          <input
            type='date'
            name='endDate'
            value={event.endDate}
            onChange={handleChange}
            placeholder='End time'
            className='w-[321px] h-[50px] text-[16px] text-[#4F4F4F] leading-[18px] font-light not-italic bg-[#FFFFFF] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]'
          />
          <input
            type='text'
            name='location'
            id='location'
            value={event.location}
            handleChange={handleChange}
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
              name='image'
              onChange={handleChange}
              value={event.image}
            />
          </label>
          <Link
            to='/event'
            type='submit'
            className='text-center w-[321px] h-[50px] text-[16px] text-[#FFFFFF] leading-[18px] font-light not-italic bg-[#8456EC] border-[1px] border-[#8456EC] rounded-[10px] p-[16px]'
          >
            Create event
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Form;
