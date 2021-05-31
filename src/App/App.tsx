import React, { useEffect } from 'react';

import getMovies from '../redux/movies/moviesActions';

import { useAppDispatch } from '../utils/hooks';

const App: React.FC = () => {
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(getMovies());
  }, [appDispatch]);

  return (
    <div>
      <h1>MovieFinder v2</h1>
    </div>
  );
};

export default App;
