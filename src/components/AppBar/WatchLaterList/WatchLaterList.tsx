import React, { Fragment } from 'react';
import isEmpty from 'lodash/isEmpty';

import { useId, useBoolean } from '@fluentui/react-hooks';
import { IconButton, Modal, Stack, Text } from '@fluentui/react';

import useWatchLaterListStyles from './WatchLaterList.styles';

import { openPanel } from '../../../redux/panels/panelsActions';
import PanelContentTypes from '../../../redux/panels/panelContentTypes';

import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

const WatchLaterList: React.FC = () => {
  const [isWatchLaterModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  const titleId = useId('title');
  const classes = useWatchLaterListStyles();
  const appDispatch = useAppDispatch();
  const { watchLater } = useAppSelector((state) => state.movies);

  return (
    <Fragment>
      <IconButton
        id="watchLaterListButton"
        iconProps={{ iconName: 'AlarmClock' }}
        title="Movies to watch later"
        ariaLabel="Movies to watch later"
        onClick={showModal}
      />
      <Modal
        titleAriaId={titleId}
        isOpen={isWatchLaterModalOpen}
        onDismiss={hideModal}
        isBlocking={false}
        containerClassName={classes.modalContainer}
      >
        <Stack>
          <Stack.Item>
            <Stack className={classes.modalHeader} horizontal horizontalAlign="space-between" verticalAlign="center">
              <Text className={classes.modalHeaderTitle} as="h3" id={titleId} variant="xLarge">
                Watch Later
              </Text>
              <IconButton iconProps={{ iconName: 'Cancel' }} ariaLabel="Close popup modal" onClick={hideModal} />
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <div className={classes.modalBody}>
              {isEmpty(watchLater) && (
                <Text as="h4" variant="large" block>
                  No movies have been added to the watch later list
                </Text>
              )}
              {!isEmpty(watchLater) && (
                <ul className={classes.list}>
                  {watchLater.map((movie) => (
                    <li key={movie.id}>
                      <button
                        className={classes.button}
                        type="button"
                        onClick={() =>
                          appDispatch(openPanel({ panelContentType: PanelContentTypes.Movie, movieId: movie.id }))
                        }
                      >
                        <Text variant="mediumPlus">{movie.title}</Text>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Stack.Item>
        </Stack>
      </Modal>
    </Fragment>
  );
};

export default WatchLaterList;
