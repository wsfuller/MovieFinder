import { FontWeights, makeStyles } from '@fluentui/react';

const useMetaItemStyles = makeStyles((theme) => {
  return {
    root: {},
    itemContainer: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    itemRow: {
      flex: '1 1 auto',
      width: '100%',
      marginBottom: theme.spacing.s1,
      selectors: {
        p: {
          margin: 0,
        },
      },
    },
    itemTitle: {
      flex: '0 0 35%',
      marginRight: theme.spacing.s1,
      textAlign: 'right',
      selectors: {
        p: {
          fontWeight: FontWeights.bold,
        },
      },
    },
    itemText: {
      flex: '0 0 65%',
    },
  };
});

export default useMetaItemStyles;
