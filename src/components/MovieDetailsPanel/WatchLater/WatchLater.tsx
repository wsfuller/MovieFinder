import React from 'react';
import TagManager from 'react-gtm-module';
import dayjs from 'dayjs';

import { IconButton } from '@fluentui/react';

import useWatchLaterStyles from './WatchLater.styles';

import { addWatchLaterMovie, removeWatchLaterMovie } from '../../../redux/movies/moviesActions';

import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

const WatchLater: React.FC = () => {
  const classes = useWatchLaterStyles();
  const appDispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state);
  const { id, release_date, title } = movies.selected.data;
  const isWatchLaterMovie = movies.watchLater.some((obj) => obj.id === movies.selected.data.id);

  const handleWatchLater = () => {
    const eventTracking = {
      event: 'movie-watch-later',
      category: 'Movies',
      label: `${title} (${dayjs(release_date).format('YYYY')})`,
    };

    if (isWatchLaterMovie) {
      TagManager.dataLayer({
        dataLayer: {
          event: eventTracking.event,
          category: eventTracking.category,
          action: `click - remove watch later movie`,
          label: eventTracking.label,
        },
      });
      appDispatch(removeWatchLaterMovie(id));
    } else {
      TagManager.dataLayer({
        dataLayer: {
          event: eventTracking.event,
          category: eventTracking.category,
          action: `click - add watch later movie`,
          label: eventTracking.label,
        },
      });
      appDispatch(addWatchLaterMovie(id, title));
    }
  };

  return (
    <IconButton
      className={classes.root}
      iconProps={{ iconName: 'AlarmClock' }}
      title="Add to watch later"
      ariaLabel="Add to watch later"
      checked={isWatchLaterMovie}
      onClick={() => handleWatchLater()}
    />
  );
};

export default WatchLater;
