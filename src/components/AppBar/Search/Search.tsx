import React, { useState, Fragment } from 'react';
import isEmpty from 'lodash/isEmpty';

import { useId, useBoolean } from '@fluentui/react-hooks';
import { IconButton, Modal, Spinner, SearchBox, Stack, Text } from '@fluentui/react';

import useSearchStyles from './Search.styles';
import { searchMovies, clearSearchMovies } from '../../../redux/search/searchActions';
import SearchResults from './SearchResults';

import { useAppDispatch, useAppSelector } from '../../../utils/hooks';

const Search: React.FC = () => {
  const [isSearchModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  const [hasRunSearch, setHasRunSearch] = useState<boolean>(false);
  const titleId = useId('title');
  const classes = useSearchStyles();
  const appDispatch = useAppDispatch();
  const { movies } = useAppSelector((state) => state.searchResults);

  const showNoResults = hasRunSearch && isEmpty(movies.results.results) && !movies.isLoading;
  const showResults = !isEmpty(movies.results.results) && !movies.isLoading;

  const onSearch = (searchTerm: string) => {
    setHasRunSearch(true);
    return appDispatch(searchMovies(searchTerm));
  };

  const clearSearchResults = () => {
    setHasRunSearch(false);
    return appDispatch(clearSearchMovies());
  };

  let searchContent = null;

  if (showNoResults) {
    searchContent = (
      <Text as="h4" variant="large" block>
        No search results
      </Text>
    );
  } else if (movies.isLoading) {
    searchContent = <Spinner label="Searching..." ariaLive="assertive" labelPosition="left" />;
  } else if (movies.error) {
    searchContent = (
      <Text as="h4" variant="large" block>
        Error searching for movies
      </Text>
    );
  } else if (showResults) {
    searchContent = <SearchResults movies={movies.results.results} />;
  }

  return (
    <Fragment>
      <IconButton
        id="searchButton"
        iconProps={{ iconName: 'Search' }}
        title="Movie search"
        ariaLabel="Movie search"
        onClick={showModal}
      />
      <Modal
        titleAriaId={titleId}
        isOpen={isSearchModalOpen}
        onDismiss={hideModal}
        onDismissed={clearSearchResults}
        isBlocking={false}
        containerClassName={classes.modalContainer}
        scrollableContentClassName={classes.modalContent}
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
              <SearchBox
                className={classes.searchInput}
                placeholder="Search for movies"
                underlined
                onSearch={(newValue) => onSearch(newValue)}
              />
              {searchContent}
            </div>
          </Stack.Item>
        </Stack>
      </Modal>
    </Fragment>
  );
};

export default Search;
