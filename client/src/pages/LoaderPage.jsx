import React, { useState, useEffect } from 'react';
import { Loader } from '../utils/Loaders';


export const LoaderPage = () => {
    const [position, setPosition] = useState(-120);

    useEffect(() => {
        const timeOut = setTimeout(() => setPosition((prev) => prev + 3), 2000);
        
        return () => clearInterval(timeOut);
    }, []);

  return (
    <div className="bg-black h-screen flex flex-row items-center justify-center">
        <div className='w-full'>
            <Loader />
        </div>
    </div>
  )
}

