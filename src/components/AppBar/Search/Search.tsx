import React, { Fragment } from 'react';

import { useId, useBoolean } from '@fluentui/react-hooks';
import { IconButton, Modal, SearchBox, Stack, Text } from '@fluentui/react';

import useSearchStyles from './Search.styles';
import { searchMovies } from '../../../redux/search/searchActions';

import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

const Search: React.FC = () => {
  const [isSearchModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  const titleId = useId('title');
  const classes = useSearchStyles();
  const appDispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.searchResults);

  // console.log('MOVIES: ', movies);

  const onSearch = (searchTerm: string) => {
    return appDispatch(searchMovies(searchTerm));
  };

  return (
    <Fragment>
      <IconButton
        id="settingsButton"
        iconProps={{ iconName: 'Search' }}
        title="Movie search"
        ariaLabel="Movie search"
        onClick={showModal}
      />
      <Modal
        titleAriaId={titleId}
        isOpen={isSearchModalOpen}
        onDismiss={hideModal}
        isBlocking={false}
        containerClassName={classes.modal}
      >
        <Stack>
          <Stack.Item>
            <Stack className={classes.modalHeader} horizontal horizontalAlign="space-between" verticalAlign="center">
              <Text className={classes.modalHeaderTitle} as="h3" id={titleId} variant="xLarge">
                Movie Search
              </Text>
              <IconButton iconProps={{ iconName: 'Cancel' }} ariaLabel="Close popup modal" onClick={hideModal} />
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <div className={classes.modalBody}>
              <SearchBox placeholder="Search for movies" underlined onSearch={(newValue) => onSearch(newValue)} />
            </div>
          </Stack.Item>
        </Stack>
      </Modal>
    </Fragment>
  );
};

export default Search;
