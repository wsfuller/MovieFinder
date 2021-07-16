import React from 'react';
import dayjs from 'dayjs';
import { SiImdb } from 'react-icons/si';

import { Icon, Link, Stack, Text } from '@fluentui/react';

import IMetaProps from './Meta.types';
import useMetaStyles from './Meta.styles';

const Meta: React.FC<IMetaProps> = ({ budget, revenue, runtime, releaseDate, status, homepage, imdbId }) => {
  const classes = useMetaStyles();

  return (
    <Stack className={classes.root} horizontal horizontalAlign="start">
      <Stack.Item>
        <ul>
          <li>
            <Text>
              Budget: <span>${budget.toLocaleString()}</span>
            </Text>
          </li>
          <li>
            <Text>
              Revenue: <span>${revenue.toLocaleString()}</span>
            </Text>
          </li>
          <li>
            <Text>
              Produced By: <span>${revenue.toLocaleString()}</span>
            </Text>
          </li>
        </ul>
      </Stack.Item>
      <Stack.Item>
        <ul>
          <li>
            <Text>Status:</Text>
            <Text>{status}</Text>
          </li>
          {runtime && (
            <li>
              <Text>Runtime:</Text>
              {/* return 1h 33m here */}
              <Text>{dayjs.duration(runtime, 'minutes').format('H m')}</Text>
            </li>
          )}

          <li>
            <Text>Release Date:</Text>
            <Text>{dayjs(releaseDate).format('LL')}</Text>
          </li>
        </ul>
      </Stack.Item>
      {homepage && (
        <Link href={homepage} target="_blank">
          <Icon iconName="Website" />
          <Icon iconName="NavigateExternalInline" />
        </Link>
      )}
      {imdbId && (
        <Link href={`https://imdb.com/title/${imdbId}`} target="_blank">
          <SiImdb />
          <Icon iconName="NavigateExternalInline" />
        </Link>
      )}
    </Stack>
  );
};

export default Meta;
