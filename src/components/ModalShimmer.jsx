import React from 'react'

const ModalShimmer = () => {
  return (
    <div className='mb-auto modal-card min-w-8/12 max-w-8/12' onClick={(e) => e.stopPropagation()}>
        <div className='header-shimmer flex justify-between animate-pulse'> 
            <div className='shimmer-left space-y-10'>
                <div className='w-[200px] h-[42px]  bg-gray-700 rounded'></div>
                <div className=' text-[#A8B5DB] flex justify-between'>
                    <div className='w-[50px] h-[24px]  bg-gray-700 rounded'></div>
                    <span>•</span>
                    <div className='w-[50px] h-[24px]  bg-gray-700 rounded'></div>
                    <span>•</span>
                    <div className='w-[50px] h-[24px]  bg-gray-700 rounded'></div>
                </div>
            </div>
            <div className='shimmer-right flex space-x-2.25'>
                <div className='w-[145px] h-[42px]  bg-gray-700 rounded'></div>
                <div className='w-[64px] h-[42px]  bg-gray-700 rounded'></div>
            </div>
        </div>
        <div className='poster-shimmer flex space-x-6.5 mt-10 animate-pulse'>
            <div className='w-4/12 h-[584px] bg-gray-700 rounded'></div>
            <div className='w-8/12 h-[584px] bg-gray-700 rounded'></div>
        </div>
        <div className='content-shimmer space-y-10 animate-pulse mt-8'>    
            <div className='detail-shimmer flex space-x-20'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-7/12 flex justify-start space-x-2.25 '>   
                    <div className='w-[100px] h-[36px]  bg-gray-700 rounded'></div>
                    <div className='w-[100px] h-[36px]  bg-gray-700 rounded'></div>
                    <div className='w-[100px] h-[36px]  bg-gray-700 rounded'></div>
                </div>
                <div className='w-3/12 flex justify-end h-[42px]  bg-gray-700 rounded'></div>
            </div>
            <div className='detail-shimmer flex space-x-13'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-9/12 space-y-4'>
                    <div className='w-8/12 h-[16px]  bg-gray-700 rounded '></div>
                    <div className='w-8/12 h-[16px]  bg-gray-700 rounded '></div>
                    <div className='w-8/12 h-[16px]  bg-gray-700 rounded '></div>
                    <div className='w-8/12 h-[16px]  bg-gray-700 rounded '></div>
                </div>
            </div>
            <div className='detail-shimmer flex space-x-13'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-6/12 h-[20px]  bg-gray-700 rounded '></div>
            </div>
            <div className='detail-shimmer flex space-x-13'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-6/12 h-[20px]  bg-gray-700 rounded '></div>
            </div>
            <div className='detail-shimmer flex space-x-13'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-6/12 h-[20px]  bg-gray-700 rounded '></div>
            </div>
            <div className='detail-shimmer flex space-x-13'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-6/12 h-[20px]  bg-gray-700 rounded '></div>
            </div>
            <div className='detail-shimmer flex space-x-13'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-6/12 h-[20px]  bg-gray-700 rounded '></div>
            </div>
            <div className='detail-shimmer flex space-x-13'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-6/12 h-[20px]  bg-gray-700 rounded '></div>
            </div>
            <div className='detail-shimmer flex space-x-13'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-6/12 h-[20px]  bg-gray-700 rounded '></div>
            </div>
            <div className='detail-shimmer flex space-x-13'>
                <div className='w-2/12 h-[20px]  bg-gray-700 rounded'></div>
                <div className='w-6/12 h-[20px]  bg-gray-700 rounded '></div>
            </div>
        </div>
    </div>
  )
}

export default ModalShimmer
