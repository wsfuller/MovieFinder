import React from 'react';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import { useTheme } from '@fluentui/react';

import IMoviesListProps from './MoviesList.types';
import MoviePoster from '../MoviePoster';

import { themeSpacingNumber } from '../../utils/helpers';

SwiperCore.use([Pagination, Navigation]);

const MoviesList: React.FC<IMoviesListProps> = ({ movies }) => {
  const theme = useTheme();

  return (
    <Swiper
      spaceBetween={themeSpacingNumber(theme.spacing.m)}
      slidesPerView={3}
      loop
      loopFillGroupWithBlank
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className="mySwiper">
          {movie.poster_path && (
            <MoviePoster
              image={{
                source: `${process.env.REACT_APP_IMAGE_URL}w500${movie.poster_path}`,
                alt: movie.title,
              }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MoviesList;
