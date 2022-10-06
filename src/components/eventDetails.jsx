import { useLocation, Link } from 'react-router-dom';
import moment from 'moment-timezone';
import EmptyEvent from './emptyEvent';

const eventDetails = () => {
  const locat = useLocation();

  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return (
    <>
      {!!isEmpty(locat.state) ? (
        <EmptyEvent />
      ) : (
        <div className='w-[375px] h-[813px] bg-[#FBFAFF] flex flex-col overflow-y-scroll overflow-x-hidden'>
          <div className='h-[375px] w-full bg-[#E87BF8]'>
            <img
              src={locat.state.image}
              alt='event'
              className='w-full h-full'
            />
          </div>

          <div className='flex flex-col gap-4 w-full h-[304.67px] px-5 py-2'>
            <h1 className='text-[#240D57] font-bold text-[28px] leading-8 not-italic'>
              {locat.state.event}
            </h1>
            <p className='text-[14px] leading-4 text-[#828282] font-[400] not-italic font-[Helvetica] mb-8'>
              Hosted By <span className='font-[700]'>{locat.state.host}</span>
            </p>
            <div className='flex items-center justify-between'>
              <img src='/event/date.svg' alt='location' />
              <div className='flex flex-col justify-center mr-6'>
                <p className='text-[16px] leading-[18px] text-[#240D57] font-bold not-italic font-[Helvetica]'>
                  {moment(locat.state.startDate).format('DD MMMM h:mm A')}
                </p>
                <p className='text-[14px] leading-4 text-[#4F4F4F] font-[400] not-italic font-[Helvetica]'>
                  to {moment.tz(locat.state.endDate).format('DD MMMM h:mm A z')}
                </p>
              </div>
              <div className='w-[14px] h-[7px]'>
                <img src='/bottom/right.svg' alt='location' />
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <img src='/event/location.svg' alt='location' />
              <div className='flex flex-col justify-start w-[66%]'>
                <p className='text-[16px] leading-[18px] text-[#240D57] font-bold not-italic font-[Helvetica]'>
                  Street name
                </p>
                <p className='text-[14px] leading-4 text-[#4F4F4F] font-[400] not-italic font-[Helvetica]'>
                  {locat.state.location}
                </p>
              </div>
              <div className='w-[14px] h-[7px]'>
                <img src='/bottom/right.svg' alt='location' />
              </div>
            </div>
          </div>

          <div className='w-[375px] h-[0.5px] bg-gray-300 mb-2'></div>
          <div className='w-[331px] h-[44px] bg-gray-300 rounded-xl mx-auto flex items-center justify-between px-3 text-[14px] py-[16px] leading-[17px] mb-[14px]'>
            <img src='/a.svg' alt='a' />
            <div className='flex gap-1'>
              <img src='/lock.svg' alt='lock' />
              <p>domain.com</p>
            </div>
            <img src='/reload.svg' alt='reload' />
          </div>

          <ul className='flex w-[375px] h-[44px] justify-between items-center px-7 mb-[30.59px]'>
            <li>
              <Link to=''>
                <img src='/bottom/left-color.svg' alt='left' />
              </Link>
            </li>
            <li>
              <Link to=''>
                <img src='/bottom/right.svg' alt='right' />
              </Link>
            </li>
            <li>
              <Link to=''>
                <img src='/bottom/upload.svg' alt='upload' />
              </Link>
            </li>
            <li>
              <Link to=''>
                <img src='/bottom/square.svg' alt='square' />
              </Link>
            </li>
            <li>
              <Link to=''>
                <img src='/bottom/book.svg' alt='book' />
              </Link>
            </li>
          </ul>
          <div className='w-[133px] h-[5px] bg-black rounded-[100px] mx-auto'></div>
        </div>
      )}
    </>
  );
};

export default eventDetails;
