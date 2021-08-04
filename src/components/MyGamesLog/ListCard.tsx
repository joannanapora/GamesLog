import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ListItemText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';


const useStyles = makeStyles((theme: Theme) =>
createStyles({
  header: {
    maxWidth: '300px',
    minWidth: '300px',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      maxWidth: '230px',
      minWidth: '230px',
    },

  },
  grid: {
    [theme.breakpoints.down('md')]: {
      display: 'flow-root',
      padding: 30,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 10,
    },
  },
  root: {
    border: '0.5px solid grey',
    backgroundColor: theme.palette.secondary.light,
    maxWidth: '1200px',
    padding: '5px 10px',
    justifyContent: 'space-between',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  status: {
    maxWidth: '85px',
    minWidth: '85px',
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',    
  }
}),
);

const ListCard = ({
    wanttoplay,
    inprogress,
    popularity,
    played,
    name,
    rate,
    image,
    platforms,
    info, 
    from, 
    to,
    status,
    platformList
  }: {
    wanttoplay: boolean;
    inprogress: boolean;
    popularity: number;
    played: boolean;
    name: string;
    rate: number;
    image: any;
    platforms: any;
    info: string;
    from: string;
    to: string;
    status: string;
    platformList: string[];
  }) => {


    const classes = useStyles();


    return (
<Grid container className={classes.root} spacing={2}>
<div style={{display: 'flex', padding: '5px', justifyContent: 'space-between'}} >
  <Grid  item>
            <img width='100px' style={{marginRight: '10px'}} src={image} alt=''/>
      </Grid>
  <Grid  item>
             <ListItemText primary={<div className={classes.header} >{name}</div>} secondary={`Score:  ${rate}`} />
      </Grid>
      </div>
      <div style={{display: 'flex', padding: '5px', justifyContent: 'space-between'}} >
      <Grid item>
        <ListItemText primary={<div className={classes.status} >Status</div>} secondary={<DoneOutlineIcon fontSize='small'/>} />  
      </Grid>
      <Grid item>
        <ListItemText primary={<div className={classes.status} >Start</div>} secondary={from} /> 
      </Grid>
      <Grid item>
        <ListItemText primary={<div className={classes.status} >Finish</div>} secondary={to} /> 
      </Grid>
      </div>
      <div style={{display: 'flex', padding: '5px', justifyContent: 'space-between'}} >
      <Grid item>
        <ListItemText secondary={<IconButton aria-label="delete">
          <EditIcon fontSize="small" />
        </IconButton>} />  
      </Grid>
      <Grid item>
        <ListItemText  secondary={<IconButton aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>} />  
      </Grid>
      </div>
</Grid>
    )
}

export default ListCard;