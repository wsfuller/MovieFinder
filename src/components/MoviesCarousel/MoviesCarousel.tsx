import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useTheme } from '@fluentui/react';

import IMoviesCarouselProps from './MoviesCarousel.types';
import MoviePoster from '../MoviePoster';

import { themeSpacingNumber } from '../../utils/helpers';
import { useBreakpoints } from '../../utils/hooks';

const MoviesCarousel: React.FC<IMoviesCarouselProps> = ({ movies }) => {
  const theme = useTheme();
  const breakpoints = useBreakpoints();

  return (
    <Swiper
      spaceBetween={themeSpacingNumber(theme.spacing.m)}
      slidesPerView={1}
      breakpoints={{
        [breakpoints.medium]: {
          slidesPerView: 2,
        },
        [breakpoints.large]: {
          slidesPerView: 3,
        },
        [breakpoints.xLarge]: {
          slidesPerView: 4,
        },
        [breakpoints.xxLarge]: {
          slidesPerView: 6,
        },
      }}
      loop
      loopFillGroupWithBlank
      navigation
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id} className="mySwiper">
          {movie.poster_path && (
            <MoviePoster
              image={{
                source: `${process.env.REACT_APP_IMAGE_URL}w300${movie.poster_path}`,
                alt: movie.title,
              }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MoviesCarousel;
