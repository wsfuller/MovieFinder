import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useTheme } from '@fluentui/react';

import useMoviesCarouselStyles from './MoviesCarousel.styles';
import IMoviesCarouselProps from './MoviesCarousel.types';
import MoviePoster from '../MoviePoster';
import { openPanel } from '../../redux/panels/panelsActions';
import PanelContentTypes from '../../redux/panels/panelContentTypes';

import { themeSpacingNumber } from '../../utils/helpers';
import { useAppDispatch, useBreakpoints } from '../../utils/hooks';

const MoviesCarousel: React.FC<IMoviesCarouselProps> = ({ movies }) => {
  const theme = useTheme();
  const appDispatch = useAppDispatch();
  const breakpoints = useBreakpoints();
  const classes = useMoviesCarouselStyles();

  return (
    <Swiper
      spaceBetween={themeSpacingNumber(theme.spacing.m)}
      slidesPerView={2}
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
        <SwiperSlide
          key={movie.id}
          className={classes.slide}
          onClick={() => appDispatch(openPanel({ panelContentType: PanelContentTypes.Movie, movieId: movie.id }))}
        >
          {movie.poster_path && (
            <MoviePoster
              image={{
                source: movie.poster_path,
                alt: movie.title,
                width: 500,
              }}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MoviesCarousel;
