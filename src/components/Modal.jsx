/* eslint-disable no-unused-vars */
import React from 'react'
import starIcon from '../assets/star.svg';
import upTrendIcon from '../assets/up-trend.png'
import arrow from '../assets/arrow.png'


const Modal = ({movie, videos}) => {
  const { 
    title, release_date, poster_path, overview, vote_average, vote_count, runtime, homepage, budget, revenue, tagline, production_companies, production_countries, genres, spoken_languages, status, popularity
   } = movie;
  
  const formatNumber = (num) => {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + ' Billion';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + ' Million';
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num;
  };
  
  const formatRuntime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
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
                                    <span className='flex items-center mr-1 w-[24px] h-[24px]'><img src={upTrendIcon}/></span>{popularity.toFixed(0)}</p>                                    
                            </div> 
                        </div>
                        <div className='content flex text-[#A8B5DB] '>
                            <p>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                            <span>•</span>
                            <p>PG-13</p>
                            <span>•</span>
                            <p>{runtime? formatRuntime(runtime): 'N/A'}</p>
                        </div>  
                    </div>
                    <div className='modal-image flex space-x-6.5'>
                        <img
                            className='w-4/12 object-cover'
                            src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '../assets/no-movie.png'}
                            alt={title}
                        />
                        <div className='w-8/12 '>
                            {videos.length > 0 &&
                            <iframe 
                                    src={`https://www.youtube.com/embed/${videos[0].key}`}
                                    frameBorder="0"
                                    allowFullScreen
                                    width='100%' height='100%'>
                            </iframe>
                            }
                        </div> 
                    </div>
                    <section className='modal-content flex justify-between'>
                        <div className='modal-detail text-[#A8B5DB] space-y-5 font-normal '>
                            <div className='flex'>                        
                                <p className='w-2/12'>Genre</p>
                                <div className='flex justify-start w-7/12 space-x-2.25 '>
                                    {genres.map((genre, index) => (
                                        <p key={index} className='px-4.5 py-1 font-semibold h-[35px] bg-[#221F3D] text-[#FFFFFF] flex items-center justify-center rounded-lg'>{genre.name}</p>
                                    ))}
                                </div>
                                <div className="content-button w-3/12 flex justify-end run">
                                    <button onClick={()=> window.open(homepage)}  
                                            className='flex items-center font-semibold'>
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
                                <p className='w-7/12 text-[#D6C7FF]'>{release_date}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Countries</p>
                                <p className="w-7/12 text-[#D6C7FF]">
                                    {production_countries.map((country, index) => (
                                        <span key={index}>
                                        {country.name}
                                        {index < production_countries.length - 1 && ' • '}
                                        </span>
                                    ))}
                                </p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Status</p>
                                <p className='w-7/12 text-[#D6C7FF]'>{status}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Language</p>
                                <p className='w-7/12 text-[#D6C7FF]'>
                                    {spoken_languages.map((language, index) => (
                                        <span key={index}>
                                        {language.english_name}
                                        {index < spoken_languages.length - 1 && ' • '}
                                        </span>
                                    ))} 
                                </p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Budget</p>
                                <p className='w-7/12 text-[#D6C7FF]'>{budget? '$'+ (formatNumber(budget)): 'N/A'}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Revenue</p>
                                <p className='w-7/12 text-[#D6C7FF]'>{revenue? '$'+ (formatNumber(revenue)): 'N/A'}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Tagline</p>
                                <p className='w-7/12 text-[#D6C7FF]'>{tagline ? tagline : 'N/A'}</p>
                            </div>
                            <div className='flex'>
                                <p className='w-2/12'>Production Companies</p>
                                <p className='w-7/12 text-[#D6C7FF]'>
                                    {production_companies? production_companies.map((company, index) => (
                                        <span key={index}>
                                        {company.name}
                                        {index < production_companies.length - 1 && ' • '}
                                        </span> 
                                    )) : 'N/A'}
                                </p>
                            </div>
                        </div>
                    </section>
             </div>
        </div>
    )
}

export default Modal

