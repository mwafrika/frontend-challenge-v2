import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='h-screen w-full bg-[#F6F2FF] flex flex-col overflow-y-scroll pt-[94px] overflow-x-hidden'>
      <div className='flex flex-col items-center p-0 w-[321px] font-[Helvetica] gap-4'>
        <h1 className='text-[36px] leading-[41px] text-center font-bold not-italic text-[#240D57]'>
          Imagine if
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-[#E87BF8] from-[#8456EC]'>
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
        <img src='/home.svg' alt='home' className='mx-auto' />
      </div>
      <Link
        to='/create'
        className='w-[187px] h-[50px] text-[16px] text-[#FFFFFF] leading-[18px] font-bold bg-gradient-to-r to-[#E87BF8] from-[#8456EC] mx-auto flex justify-center items-center p-[16px] gap-[10px] rounded-[10px] mb-[13.7px]
      hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
      '
      >
        🎉 Create my event
      </Link>
      <div className=' w-full h-[0.5px] bg-gray-300 mb-2'></div>
      <div className='w-[331px] h-[44px] bg-gray-300 rounded-xl mx-auto flex items-center justify-between px-3 text-[14px] leading-[17px] mb-[14px]'>
        <img src='/a.svg' alt='a' />
        <div className='flex gap-1'>
          <img src='/lock.svg' alt='lock' />
          <p>domain.com</p>
        </div>
        <img src='/reload.svg' alt='reload' />
      </div>

      <ul className='flex w-full h-[44px] justify-between items-center px-7 mb-[30.59px]'>
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
  );
}

export default App;
