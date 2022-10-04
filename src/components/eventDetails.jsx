import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const eventDetails = () => {
  // display event details

  const events = {
    host: 'Mwafrika',
    location: 'Lagos',
    image:
      'https://media.istockphoto.com/photos/render-of-colorful-typography-picture-id1346684222?b=1&k=20&m=1346684222&s=170667a&w=0&h=Otv5R9AlR7zlJ3HHI6vpY-DonRAEn0oDr5dXQjD-8Kk=',
    endDate: '2021-04-20',
    event: 'Birthday Party',
    startDate: '2021-04-20',
  };

  return (
    <div className='w-[375px] h-[813px] bg-[#F6F2FF] flex flex-col overflow-y-scroll pt-[94px] overflow-x-hidden'>
      <div className='flex flex-col items-center p-0 w-[321px] h-[160px] font-[Helvetica] gap-4'>
        <h1 className='text-[36px] leading-[41px] text-center font-bold not-italic text-[#240D57]'>
          {events.event}
        </h1>
        <p className='w-[321px] h-[36px] text-center leading-[18px] font-light not-italic text-[16px] text-[#4F4F4F]'>
          {events.host}
        </p>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <img src={events.image} alt='event' className='w-[321px] h-[160px]' />
        <div className='flex flex-col items-center gap-4'>
          <div className='flex flex-row items-center gap-4'>
            <p className='text-[16px] leading-[18px] font-light not-italic text-[#4F4F4F]'>
              {events.location}
            </p>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <p className='text-[16px] leading-[18px] font-light not-italic text-[#4F4F4F]'>
              {events.startDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default eventDetails;
