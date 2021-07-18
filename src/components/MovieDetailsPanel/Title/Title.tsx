import React from 'react';

import { TooltipHost, TooltipOverflowMode } from '@fluentui/react';

import ITitleProps from './Title.types';
import useTitleStyles from './Title.styles';

const Title: React.FC<ITitleProps> = ({ title }) => {
  const classes = useTitleStyles();

  return (
    <TooltipHost overflowMode={TooltipOverflowMode.Self} content={title} hostClassName={classes.root}>
      {title}
    </TooltipHost>
  );
};

export default Title;
