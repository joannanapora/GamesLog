import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {cardColor, Games} from "../Data";
import GameCard from './GameCard';
import Filters from './Filters';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: '2% 8%',
      flexDirection: 'row',
      [theme.breakpoints.down('md')]: {
        margin: 0,
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
      },
    },
    grid: {
      flexGrow: 1,
      padding: '50px',
      [theme.breakpoints.down('md')]: {
        display: 'flow-root',
        padding: '50px'
      },
      [theme.breakpoints.down('sm')]: {
        padding: 10,
      },
    },
  }),
);

const GameCardList = () => {
  const classes = useStyles();
  const data = Games;
 

  return (
    <div className={classes.root} >
<Filters/>
    <Grid container className={classes.grid}>
   
        <Grid style={{width: '100%'}} container spacing={1} justifyContent="center">
            {
                data.map((card,i)=>{
                    return (
            <Grid key={i} item>
              <GameCard status={card.status} wanttoplay={card.wanttoplay} inprogress={card.inprogress}  popularity={card.popularity} played={card.played} info={card.shortInfo} platforms={card.platforms} name={card.name} rate={card.rate} image={card.jpg} />
            </Grid>
                    )
                })
            }
     
      </Grid>
    </Grid>
    </div>
  );
}

export default GameCardList;