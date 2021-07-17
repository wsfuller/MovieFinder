import React, { Fragment } from 'react';
import dayjs from 'dayjs';
import { SiImdb } from 'react-icons/si';

import { useTheme, Icon, Link, Stack, Text } from '@fluentui/react';

import IMetaProps from './Meta.types';
import useMetaStyles from './Meta.styles';
import MetaItem from './MetaItem';

import { movieRuntime } from '../../../utils/helpers';
import { useBreakpoints, useWindowSize } from '../../../utils/hooks';

const Meta: React.FC<IMetaProps> = ({
  budget,
  revenue,
  runtime,
  releaseDate,
  status,
  homepage,
  imdbId,
  productionCompanies,
}) => {
  const classes = useMetaStyles();
  const size = useWindowSize();
  const breakpoints = useBreakpoints();
  const theme = useTheme();

  const isMetaColumnStackHorizontal = size.width >= breakpoints.large;

  return (
    <Stack className={classes.root}>
      {/* Meta Item columns */}
      <Stack
        className={classes.metaColumnContainer}
        horizontal={isMetaColumnStackHorizontal}
        horizontalAlign={isMetaColumnStackHorizontal ? 'center' : 'stretch'}
        verticalAlign="start"
      >
        {/* Left column */}
        <Stack className="column">
          <MetaItem title="Status" text={status} />
          {runtime && <MetaItem title="Runtime" text={movieRuntime(runtime)} />}
          <MetaItem title="Release" text={dayjs(releaseDate).format('LL')} />
        </Stack>
        <div className={classes.divider} />
        {/* Right column */}
        <Stack className="column">
          <MetaItem title="Budget" text={`$${budget.toLocaleString()}`} />
          <MetaItem title="Revenue" text={`$${revenue.toLocaleString()}`} />
          <MetaItem
            title="Produced by"
            renderText={() => (
              <Fragment>
                {productionCompanies.map(({ id, name }) => (
                  <Text key={id} variant="mediumPlus" as="p" block>
                    {name}
                  </Text>
                ))}
              </Fragment>
            )}
          />
        </Stack>
      </Stack>
      {/* Quick links */}
      <Stack horizontal tokens={{ childrenGap: theme.spacing.m }}>
        <Stack.Item>
          {homepage && (
            <Link href={homepage} target="_blank">
              <Icon iconName="Website" className={classes.icon} />
              <Icon iconName="NavigateExternalInline" />
            </Link>
          )}
        </Stack.Item>
        <Stack.Item>
          {imdbId && (
            <Link href={`https://imdb.com/title/${imdbId}`} target="_blank">
              <SiImdb className={classes.icon} />
              <Icon iconName="NavigateExternalInline" />
            </Link>
          )}
        </Stack.Item>
      </Stack>
    </Stack>
  );
};

export default Meta;
