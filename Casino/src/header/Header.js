import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Header = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10 
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  paperRight: {
    padding: theme.spacing(2), 
    float: 'right',
    marginRight: '10px',
    color: theme.palette.text.secondary,
    textTransform : 'uppercase'
  },
}));

export default function FullWidthGrid() {
  const classes = Header();

  return (
    <div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper} >
                <img src=" " alt="Logo" />
                <div className={classes.paperRight} >Balance = </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
    </div>
  );
}
