import  { UnderConstruction } from '../utils/Loaders'
import React, { useState, useEffect } from 'react';
import { LoaderPage } from './LoaderPage';


export const HomePage = () => {

    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },4000)
    })

  return (
    <div className={`h-screen flex flex-row items-center justify-center ${loading ? 'bg-black' : 'bg-zinc-900'}`}>
        <div className='w-1/4'>
            {loading ? <LoaderPage /> : <UnderConstruction />}
        </div>
    </div>
  )
}

