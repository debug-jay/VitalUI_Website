import React from 'react';


const HEADING = () =>{
      return(
        <>
        <div className="bg-white dark:bg-transparent h-screen flex justify-center">
    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 -z-0">
        <div className='absolute right-5 md:right-8 lg:right-9 bg-blue-800 w-14 h-14 lg:h-20 lg:w-20 rounded-full' id="placement"></div>
    <div className='mt-20 w-full flex justify-center items-center'><iframe src='https://my.spline.design/macbookprocopy-0f42414ff68f7d8a16b363966416eb7a/' frameBorder='0' width='100%' height='100%' className=' h-96'></iframe></div>
    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">
                We Make Website Development Easier!
            </span>
            <span className="block text-indigo-500">
                It&#x27;s Today or Never. 
            </span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                </button>
            </div>
        </div>
    </div>
</div>
        </>
      );
    }

function Heading(){
    return(
        <HEADING />
    );
}

export default Heading;