import Loader from '../utils/Loader'
import React, { useState, useEffect } from 'react';


export const LoaderPage = () => {
    const [position, setPosition] = useState(-120);

    useEffect(() => {
        const interval = setInterval(() => setPosition((prev) => prev + 3), 10);
        console.log(position)
        return () => clearInterval(interval);
    }, []);

  return (
    <div className="bg-black h-screen flex flex-row items-center justify-center">
        <div className='w-1/4'>
            <Loader />
        </div>
    </div>
  )
}

