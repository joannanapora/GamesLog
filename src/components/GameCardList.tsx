import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Games} from "./Data";
import GameCard from './GameCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const GameCardList = () => {
  const classes = useStyles();

  const data = Games;

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="center">
            {
                data.map((card,i)=>{
                    return (
            <Grid item>
              <GameCard info={card.shortInfo} platforms={card.platforms} name={card.name} rate={card.rate} image={card.jpg} />
            </Grid>
                    )
                })
            }

        </Grid>
      </Grid>
    </Grid>
  );
}

export default GameCardList;