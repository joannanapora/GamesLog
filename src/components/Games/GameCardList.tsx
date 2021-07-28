import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Games} from "../Data";
import GameCard from './GameCard';
import Filters from './Filters';
import Modal from "../Modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      },
    },
    grid: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        display: 'flow-root',
      },
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
    <div className={classes.root} >
<Filters/>
    <Grid container className={classes.grid} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="center">
            {
                data.map((card,i)=>{
                    return (
            <Grid key={i} item>
              <GameCard wanttoplay={card.wanttoplay} inprogress={card.inprogress}  popularity={card.popularity} played={card.played} info={card.shortInfo} platforms={card.platforms} name={card.name} rate={card.rate} image={card.jpg} />
            </Grid>
                    )
                })
            }

        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default GameCardList;