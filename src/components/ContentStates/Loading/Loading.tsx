import React from 'react';

import { Spinner, SpinnerSize } from '@fluentui/react';

import ILoadingProps from './Loading.types';

const Loading: React.FC<ILoadingProps> = ({ text }) => <Spinner label={text} size={SpinnerSize.large} />;

export default Loading;
