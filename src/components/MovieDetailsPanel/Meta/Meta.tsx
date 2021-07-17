import React, { Fragment } from 'react';
import dayjs from 'dayjs';
import { SiImdb } from 'react-icons/si';

import { Icon, Link, Stack, Text } from '@fluentui/react';

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

  const isStackRootHorizontal = size.width >= breakpoints.large;

  return (
    <Stack
      className={classes.root}
      horizontal={isStackRootHorizontal}
      horizontalAlign={isStackRootHorizontal ? 'center' : 'stretch'}
      verticalAlign="start"
    >
      {/* Left column */}
      <Stack className="column">
        <MetaItem title="Status" text={status} />
        {runtime && <MetaItem title="Runtime" text={movieRuntime(runtime)} />}
        <MetaItem title="Released" text={dayjs(releaseDate).format('LL')} />
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
  );
};

export default Meta;

// {
//   /* {homepage && (
//         <Link href={homepage} target="_blank">
//           <Icon iconName="Website" />
//           <Icon iconName="NavigateExternalInline" />
//         </Link>
//       )}
//       {imdbId && (
//         <Link href={`https://imdb.com/title/${imdbId}`} target="_blank">
//           <SiImdb />
//           <Icon iconName="NavigateExternalInline" />
//         </Link>
//       )} */
// }

// {
//   /* Right column */
// }
// {
//   /* <Stack.Item>
//           <Stack horizontal>
//
//           </Stack>
//
//           <Stack horizontal>
//
//           </Stack>
//         </Stack.Item> */
// }
