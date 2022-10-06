import { Link } from 'react-router-dom';

const NoEvent = () => (
  <div className='w-[375px] h-[813px] bg-[#F6F2FF] flex flex-col items-center overflow-y-scroll pt-[94px] overflow-hidden'>
    <Link to='/'>
      <img
        src='/bottom/left-color.svg'
        alt='left'
        className='absolute top-5 left-5 w-[24px] h-[24px]'
      />
    </Link>
    <div className='flex flex-col items-center p-0 w-[321px] h-[160px] font-[Helvetica] gap-4'>
      <h1 className='text-[36px] leading-[41px] text-center font-bold not-italic text-[#240D57]'>
        No event found
      </h1>
      <p className='w-[321px] h-[36px] text-center leading-[18px] font-light not-italic text-[16px] text-[#4F4F4F]'>
        Please create an event to view details
      </p>
    </div>
    <Link
      to='/create'
      className='w-[187px] h-[50px] text-[16px] text-[#FFFFFF] leading-[18px] font-bold bg-gradient-to-r to-[#E87BF8] from-[#8456EC] mx-auto flex justify-center items-center p-[16px] gap-[10px] rounded-[10px] mb-[13.7px]
      hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
      '
    >
      🎉 Create my event
    </Link>
  </div>
);

export default NoEvent;
