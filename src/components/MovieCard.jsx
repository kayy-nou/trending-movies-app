import React from 'react'
import starIcon from '../assets/star.svg';
import noPoster from '../assets/no-movie.png'

const MovieCard = ({ movie, onClick }) => {

    const { title, vote_average, poster_path, release_date, original_language } = movie;
  
    return (
        <div className='movie-card' onClick={onClick}>
            <img className='min-h-[368px] max-h-[368px] object-cover ' 
                src={poster_path ? 
                `https:/image.tmdb.org/t/p/w500/${poster_path} `: noPoster}
                alt={title} 
            />
            <div>
                <h3 className='mt-3'>{title}</h3>
                <div className='content'>
                    <div className='rating'>
                        <img src={starIcon} alt="Star Icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>
                    <span>♦</span>
                    <p className='lang'>
                        {original_language}
                    </p>
                    <span>♦</span>
                    <p className='year'> 
                        {release_date ? release_date.split('-')[0]: 'N/A'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
