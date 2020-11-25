import React, { useEffect, useState } from 'react';
import * as Service from '../services/Service';

// // Components
import StartRating from './StartRating';
import Comic from './Comic';

const LOCAL_STORAGE_KEY = 'ratings';

const ComicRating = () => {
  const [comic, setComic] = useState({});
  const [lastComicId, setLastComicId] = useState(0);
  const [currentComicId, setCurrentComicId] = useState(0);
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getlastComic = () => {
    setIsLoading(true);
    Service.getLastComic()
      .then((response) => {
        setIsLoading(false);
        setComic(response.data);
        setLastComicId(response.data.num);
        setCurrentComicId(response.data.num);
        const ratingObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        setRating(ratingObj[`comic_${response.data.num}`]);
      })
      .catch((err) => console.log(err));
  };

  const getComicById = (id) => {
    setIsLoading(true);
    Service.getComicById(id)
      .then((response) => {
        setIsLoading(false);
        setComic(response.data);
        setCurrentComicId(response.data.num);
        const ratingObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        setRating(ratingObj[`comic_${response.data.num}`]);
      })
      .catch((err) => console.log(err));
  };
  const getRating = (value) => {
    setRating(value);
    const ratingObj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        ...ratingObj,
        [`comic_${currentComicId}`]: value,
      })
    );
  };

  useEffect(() => {
    getlastComic();
  }, []);

  return (
    <div className="grid grid-cols-1 text-center">
      {isLoading ? (
        <img src="https://en-coloradosprings.com/wp-content/themes/geocrafttheme-v2/images/ajax_loader.gif" alt="loading" />
      ) : (
        <>
          <h1 className="text-2xl font-black font-rockSalt">{comic.title}</h1>
          <div>
            <Comic currentComicId={currentComicId} lastComicId={lastComicId} getComicById={getComicById} comic={comic} />
          </div>
          <div className="mt-3">
            <StartRating rating={rating} getRating={getRating} />
          </div>
        </>
      )}
    </div>
  );
};

export default ComicRating;
