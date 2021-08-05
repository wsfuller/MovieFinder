import React, { Fragment } from 'react';
import dayjs from 'dayjs';
import { SiImdb } from 'react-icons/si';
import TagManager from 'react-gtm-module';

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
        <Stack className={classes.column}>
          <MetaItem title="Status" text={status} />
          {runtime && <MetaItem title="Runtime" text={movieRuntime(runtime)} />}
          <MetaItem title="Release" text={dayjs(releaseDate).format('LL')} />
        </Stack>
        <div className={classes.divider} />
        {/* Right column */}
        <Stack className={classes.column}>
          <MetaItem title="Budget" text={`$${budget.toLocaleString()}`} />
          <MetaItem title="Revenue" text={`$${revenue.toLocaleString()}`} />
          <MetaItem
            title="Producer(s)"
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
        {homepage && (
          <Stack.Item>
            <Link
              className={classes.iconLink}
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                TagManager.dataLayer({
                  dataLayer: {
                    event: 'click-external-link',
                    label: homepage,
                  },
                })
              }
            >
              <Icon iconName="Website" className={classes.icon} />
              <Icon iconName="NavigateExternalInline" />
            </Link>
          </Stack.Item>
        )}
        {imdbId && (
          <Stack.Item>
            <Link
              className={classes.iconLink}
              href={`https://imdb.com/title/${imdbId}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                TagManager.dataLayer({
                  dataLayer: {
                    event: 'click-external-link',
                    label: `https://imdb.com/title/${imdbId}`,
                  },
                })
              }
            >
              <SiImdb className={classes.icon} />
              <Icon iconName="NavigateExternalInline" />
            </Link>
          </Stack.Item>
        )}
      </Stack>
    </Stack>
  );
};

export default Meta;
