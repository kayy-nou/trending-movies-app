/* eslint-disable no-unused-vars */
import React from 'react'
import starIcon from '../assets/star.svg';
import upTrendIcon from '../assets/up-trend.png'
import arrow from '../assets/arrow.png'


const ModalPopUp = ({ movie, closeModal }) => {
  const { title, release_date, poster_path, overview, vote_average, vote_count, genre_ids } = movie;
  const formatNumber = (num) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num;
  };
  
    return (
        <div className=' mb-auto modal-card min-w-8/12 max-w-8/12 ' onClick={(e) => e.stopPropagation()}>
             <div className='space-y-7.5'>
                    <div className='text-white space-y-7.5'>
                        <div className='flex justify-between'>
                            <h2 className='flex-none '>{title}</h2>
                            <div className='rating space-x-1'>
                                <div  className=' px-4 py-1.75 font-semibold h-[42px] bg-[#221F3D] text-[#FFFFFF] flex items-center justify-center rounded-lg p-[6px]'>
                                    <img src={starIcon} alt="star" className='mr-1' />
                                    <p>{vote_average ? vote_average.toFixed(1) : 'N/A'} 
                                        <span className='mr-1.5 font-normal text-[#A8B5DB]'>/10</span>
                                        <span className='font-normal text-[#A8B5DB]'>({formatNumber(vote_count)})</span></p>
                                </div>
                                <p className=' px-4 py-1.75 font-semibold h-[44px] bg-[#221F3D] text-[#A8B5DB] flex items-center justify-center rounded-lg p-[6px]'>
                                    <span className='flex items-center mr-1 w-[24px] h-[24px]'><img src={upTrendIcon}/></span>1</p>                                    
                            </div> 
                        </div>
                        <div className='content flex text-[#A8B5DB] '>
                            <p>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                            <span>•</span>
                            <p>PG-13</p>
                            <span>•</span>
                            <p>Duration</p>
                        </div>  
                    </div>
                    <div className='modal-image flex space-x-6.5'>
                        <img
                            className='w-4/12 object-cover'
                            src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '../assets/no-movie.png'}
                            alt={title}
                        />
                        <div className='w-8/12 '>
                            <iframe src="https://www.youtube.com/embed/Dfigw0IMl-c" 
                                    frameBorder="0"
                                    allowFullScreen
                                    width='100%' height='100%'>
                            </iframe>
                        </div>
                    </div>
                    <section className='modal-content flex justify-between'>
                        <div className='modal-detail text-[#A8B5DB] space-y-5 font-normal '>
                            <div className='flex'>                        
                                <p className='w-2/12'>Genre</p>
                                <div className='flex justify-start w-7/12 space-x-2.25 '>
                                    <p className='px-4.5 py-1 font-semibold h-[35px] bg-[#221F3D] text-[#FFFFFF] flex items-center justify-center rounded-lg'>Action</p>
                                    <p className='px-4.5 py-1 font-semibold h-[35px] bg-[#221F3D] text-[#FFFFFF] flex items-center justify-center rounded-lg '>Adventure</p>
                                    <p className='px-4.5 py-1 font-semibold h-[35px] bg-[#221F3D] text-[#FFFFFF] flex items-center justify-center rounded-lg'>Drama</p>
                                </div>
                                <div className="content-button w-3/12 flex justify-end run">
                                    <button onClick={closeModal}  className='flex items-center font-semibold'>
                                        <p className='w-[186px] h-[44px] bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] text-[#121212] flex items-center justify-center rounded-lg p-[6px] cursor-pointer'>Visit Home Page 
                                            <span className='ml-1'><img src={arrow}/></span></p>
                                    </button>
                                </div>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Overview</p>
                            <p className='w-7/12 text-white'>{overview}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Release date</p>
                                <p className='w-7/12 text-[#D6C7FF]'>{release_date} (Worldwide)</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Countries</p>
                                <p className='w-7/12 text-[#D6C7FF]'>United Stated <span>•</span> Canada <span>•</span> UAE <span>•</span> Hungary <span>•</span> Italy <span>•</span> New Zealand</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Status</p>
                                <p className='w-7/12 text-[#D6C7FF]'>Released</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Language</p>
                                <p className='w-7/12 text-[#D6C7FF]'>English <span>•</span> Korean <span>•</span> Hindi <span>•</span> Arabic <span>•</span> German <span>•</span> Spanish</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Budget</p>
                                <p className='w-7/12 text-[#D6C7FF]'>$21.4 million</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Revenue</p>
                                <p className='w-7/12 text-[#D6C7FF]'>$900 Million</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Tagline</p>
                                <p className='w-7/12 text-[#D6C7FF]'>45.6 Billion Won is Child's Play</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Production Companies</p>
                                <p className='w-7/12 text-[#D6C7FF]'>Legendary Entertainment <span>•</span> Warner Bros <span>•</span> Entertainment <span>•</span> Villeneuve Films</p>
                            </div>
                        </div>
                    </section>
             </div>
        </div>
    )
}

export default ModalPopUp

