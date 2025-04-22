import React from 'react'

const MoviecardShimmer = () => {
  return (
      <div className='movie-card'>
          <div className='min-h-[368px] max-h-[368px] object-cover animate-pulse bg-gray-700 rounded'></div>
          <div>
              <div className='mt-3 h-2 rounded bg-gray-700 animate-pulse max-w-20'></div>
              <div className='content flex'>
                  <div className='rating h-2 rounded bg-gray-700 animate-pulse w-5 max-w-20'></div>
                  <span>♦</span>
                  <div className='rating h-2 rounded bg-gray-700 animate-pulse w-5 max-w-20'></div>
                  <span>♦</span>
                  <div className='rating h-2 rounded bg-gray-700 animate-pulse w-10 max-w-20'></div>
              </div>
          </div>
      </div>
    )
}

export default MoviecardShimmer
