import React, { useEffect, Fragment } from 'react';
import isEmpty from 'lodash/isEmpty';

import { Shimmer, ShimmerElementType, Stack } from '@fluentui/react';

import IMovieDetailsPanelProps from './MovieDetailsPanel.types';
import useMovieDetailsPanelStyles from './MovieDetailsPanel.styles';
import { getMovie } from '../../redux/movies/moviesActions';
import TopBanner from './TopBanner';
import Genres from './Genres';
import Title from './Title';
import Tagline from './Tagline';
import Overview from './Overview';
import Meta from './Meta';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const MovieDetailsPanel: React.FC<IMovieDetailsPanelProps> = ({ movieId }) => {
  const classes = useMovieDetailsPanelStyles();
  const appDispatch = useAppDispatch();
  const {
    movies: {
      selected: { data: movie, isLoading },
    },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (movieId) {
      appDispatch(getMovie(movieId));
    }
  }, [appDispatch, movieId]);

  let panelContent = null;

  if (isLoading) {
    panelContent = (
      <Fragment>
        <Shimmer className={classes.shimmer} shimmerElements={[{ type: ShimmerElementType.line, height: 200 }]} />
        <Shimmer className={classes.shimmer} />
        <Shimmer className={classes.shimmer} shimmerElements={[{ type: ShimmerElementType.line, height: 40 }]} />
        <Shimmer className={classes.shimmer} shimmerElements={[{ type: ShimmerElementType.line, height: 30 }]} />
        <Shimmer className={classes.shimmer} shimmerElements={[{ type: ShimmerElementType.line, height: 150 }]} />
        <Shimmer className={classes.shimmer} shimmerElements={[{ type: ShimmerElementType.line, height: 300 }]} />
      </Fragment>
    );
  }

  if (!isEmpty(movie) && !isLoading) {
    panelContent = (
      <Stack>
        <TopBanner movieTitle={movie.title} backdropPath={movie.backdrop_path} />
        <Stack className={classes.bodyContent}>
          <Stack.Item>
            <Genres genres={movie.genres} />
          </Stack.Item>
          <Stack.Item>
            <Title title={movie.title} />
          </Stack.Item>
          {movie.tagline && (
            <Stack.Item>
              <Tagline tagline={movie.tagline} />
            </Stack.Item>
          )}
          <Stack.Item>
            <Overview text={movie.overview} />
          </Stack.Item>
          <Stack.Item>
            <Meta
              budget={movie.budget}
              revenue={movie.revenue}
              productionCompanies={movie.production_companies}
              runtime={movie.runtime}
              releaseDate={movie.release_date}
              status={movie.status}
              homepage={movie.homepage}
              imdbId={movie.imdb_id}
            />
          </Stack.Item>
        </Stack>
      </Stack>
    );
  }

  return panelContent;
};

export default MovieDetailsPanel;
