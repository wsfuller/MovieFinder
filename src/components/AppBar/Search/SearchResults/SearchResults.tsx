import React from 'react';

import { useTheme, Stack, Text } from '@fluentui/react';

import ISearchResultsProps from './SearchResults.types';
import useSearchResultsStyles from './SearchResults.styles';
import MoviePoster from '../../../MoviePoster';

import { openPanel } from '../../../../redux/panels/panelsActions';
import PanelContentTypes from '../../../../redux/panels/panelContentTypes';

import { useAppDispatch } from '../../../../utils/hooks';

const SearchResults: React.FC<ISearchResultsProps> = ({ movies }) => {
  const classes = useSearchResultsStyles();
  const appDispatch = useAppDispatch();
  const theme = useTheme();

  const handleOpenPanel = (movieId: number) =>
    appDispatch(openPanel({ panelContentType: PanelContentTypes.Movie, movieId }));

  return (
    <Stack className={classes.root} horizontal horizontalAlign="center" wrap tokens={{ childrenGap: theme.spacing.m }}>
      {movies.map((movie) => (
        <Stack.Item key={movie.id}>
          <Stack
            as="div"
            tabIndex={0}
            role="button"
            className={classes.result}
            onClick={() => handleOpenPanel(movie.id)}
            onKeyDown={() => handleOpenPanel(movie.id)}
          >
            <Stack.Item>
              <MoviePoster image={{ source: movie.poster_path, alt: `${movie.title} poster`, width: 200 }} />
            </Stack.Item>
            <Stack.Item>
              <Text variant="smallPlus">{movie.title}</Text>
            </Stack.Item>
          </Stack>
        </Stack.Item>
      ))}
    </Stack>
  );
};

export default SearchResults;
