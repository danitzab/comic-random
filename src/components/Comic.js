import React from 'react'

//Icons
import right from '../assets/icons/chevron-right.svg';
import left from '../assets/icons/chevron-left.svg';

const Comic = ({currentComicId, lastComicId, getComicById, comic }) => {
    return (
        <>
        {currentComicId > 0 && (
          <button
            className="inline border  bg-teal-500 border-teal-500 border-solid rounded-full p-1 mr-2 focus:outline-none"
            onClick={() => getComicById(currentComicId - 1)}
          >
            <img src={left} alt="chevron-left" />
          </button>
        )}
        <img className="inline mt-4 h-2/5" style={{ maxWidth: '75%' }} src={comic.img} alt={comic.title} />
        {currentComicId !== lastComicId && (
          <button
            className="inline border  bg-teal-500 border-teal-500 border-solid rounded-full p-1 ml-2 focus:outline-none"
            onClick={() => getComicById(currentComicId + 1)}
          >
            <img src={right} alt="chevron-right" />
          </button>
        )}
      </>
    )
}

export default Comic
