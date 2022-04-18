import React from "react";

const header = () => {
  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
        <div className='flex title-font font-medium items-center  mb-4 md:mb-0'>
          <div className='bg-indigo-500 rounded-lg p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 fill-white '
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M13 7H7v6h6V7z' />
              <path
                fillRule='evenodd'
                d='M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <span className='ml-3 text-2xl uppercase'>AWS Simplified</span>
        </div>
        <button className='inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
          See Code
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-4 h-4 ml-1'
            viewBox='0 0 24 24'
          >
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default header;
