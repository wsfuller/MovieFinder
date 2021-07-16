import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper/core';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import { initializeIcons } from '@fluentui/react';

import Store from './redux/Store';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import './index.css';

initializeIcons();
SwiperCore.use([Navigation]);
dayjs.extend(duration);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
