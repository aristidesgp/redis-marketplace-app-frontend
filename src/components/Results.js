import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { SampleCard } from './';
const useStyles = makeStyles((theme) => ({
  resultsBody: {
    marginBottom: theme.spacing(2.5),
    '&::after': {
      content: '""',
      flex: '0 0 33%'
    }
  }
}));

export default function Results({ samples, updateTags }) {
  const classes = useStyles();

  return (
    <Grid className={classes.resultsBody} container wrap="wrap" justify="space-between" spacing={1}>
      {samples?.map((sample) => (
        <Grid item sm={6} md={3} key={sample.id}>
          <SampleCard sample={sample} updateTags={updateTags} />
        </Grid>
      ))}
    </Grid>
  );
}
