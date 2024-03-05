"use client"
import React from 'react';
import { BallTriangle } from "react-loader-spinner";

const LoadingComponent = () => {
  return (
    <div className=' flex justify-center items-center h-screen w-screen'>
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#ffffff"
            ariaLabel="ball-triangle-loading"
            wrapperClass={'mx-auto'}
            visible={true}
        />
    </div>
  )
}

export default LoadingComponent;