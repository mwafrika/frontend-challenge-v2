import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const eventDetails = () => {
  const locat = useLocation();
  const { host, location, image, endDate, event, startDate } = locat.state;

  console.log(host, location, image, endDate, event, startDate, 'event');

  return (
    <div className='w-[375px] h-[813px] bg-[#F6F2FF] flex flex-col overflow-y-scroll pt-[94px] overflow-x-hidden'>
      <div className='flex flex-col items-center p-0 w-[321px] h-[160px] font-[Helvetica] gap-4'>
        <h1 className='text-[36px] leading-[41px] text-center font-bold not-italic text-[#240D57]'>
          {event}
        </h1>
        <p className='w-[321px] h-[36px] text-center leading-[18px] font-light not-italic text-[16px] text-[#4F4F4F]'>
          {host}
        </p>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <img src={image} alt='event' className='w-[321px] h-[160px]' />
        <div className='flex flex-col items-center gap-4'>
          <div className='flex flex-row items-center gap-4'>
            <p className='text-[16px] leading-[18px] font-light not-italic text-[#4F4F4F]'>
              {location}
            </p>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <p className='text-[16px] leading-[18px] font-light not-italic text-[#4F4F4F]'>
              {startDate}
            </p>
          </div>
          <div className='flex flex-row items-center gap-4'>
            <p className='text-[16px] leading-[18px] font-light not-italic text-[#4F4F4F]'>
              {endDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default eventDetails;
