import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  Card: {
    width: '30%',
    height: 100,
    marginTop: '2%',
    marginLeft: '35%',
    border: '1px solid black',
  },
  root: {
    marginTop: '8%'
  },
  AddIcon: {
    marginRight: '80%',
    marginTop: '3%',
    width: '10%',
    height: '65%'
  },
  Typography: {
    marginTop: '-11%',
    fontSize: '30px'

  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.Card} >
        <AddIcon className={classes.AddIcon}></AddIcon>
        <Typography className={classes.Typography} > ADD New Mentor </Typography>
      </Card>
      <Card className={classes.Card}>

      </Card>
      <Card className={classes.Card}>

      </Card>
      <Card className={classes.Card}>

      </Card>
      <Card className={classes.Card}>

      </Card>
    </div>
  );
}