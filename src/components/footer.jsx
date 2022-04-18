import React from "react";

const Footer = () => {
  return (
    <footer className='text-gray-600 body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <div className='flex title-font font-medium items-center  mb-4 md:mb-0'>
          <div className='bg-indigo-500 rounded-lg p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 fill-white '
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
          <span className='ml-3 text-lg uppercase'>AWS Simplified</span>
        </div>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © {new Date().getFullYear()} martinrojas.dev—
          <a
            href='https://twitter.com/martinrojas'
            className='text-gray-600 ml-1'
            rel='noopener noreferrer'
            target='_blank'
          >
            @martinrojas
          </a>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'></span>
      </div>
    </footer>
  );
};

export default Footer;
