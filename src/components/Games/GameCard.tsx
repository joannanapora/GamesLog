import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Rating from '@material-ui/lab/Rating';
import { Typography } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import Modal from "../Modal";
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import CachedIcon from '@material-ui/icons/Cached';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 300,
      maxWidth: 300,
      transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard,
      }),
      "&:hover": {
         transform: 'scale(1.03)'
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  info: {
    minHeight: 120,
  },
  header: {
    fontWeight: 500
  },
  ava: {
    backgroundColor: '#ff3d47'
  },
  avatar:{
  },
    rating: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
      },
    heart: {
        "&:hover": {
            color: '#ff3d47'
          }
    },
    fullheart: {
      color: '#ff3d47',
      "&:hover": {
        backgroundColor: 'transparent',
      },
  }
  }),
  
);

const GameCard = ({wanttoplay, inprogress, popularity, played, name, rate, image, platforms, info}: {wanttoplay: boolean, inprogress: boolean, popularity: number,played: boolean, name:string, rate: number, image: any, platforms: any, info: string }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (name:string) => {
    setOpen(true);
    addToGamesLog(name)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addToGamesLog = (name:string) => {
  }

  const showAction = (inprogress:boolean, played:boolean, wantoplay:boolean) => {
    
    if ( played ) {
      return (
        <IconButton className={classes.fullheart} aria-label="add to games log">
     <CheckIcon/>
  </IconButton>
)
    }
    
    if (!played && !wantoplay && !inprogress )  {
      return (
        <IconButton  onClick={()=> !played? handleClickOpen(name) : null } className={classes.heart} aria-label="add to games log">
         <LibraryAddIcon/>
      </IconButton>
      )
    }
    if ( inprogress )
    return (
            <IconButton  aria-label="add to games log">
         <HourglassEmptyIcon/>
      </IconButton>
    )

    if ( wantoplay ) {
      return (
        <IconButton aria-label="add to games log">
     <VisibilityIcon/>
  </IconButton>
)
    }
    
  }

  const cardBackground = (inprogress:boolean, played:boolean, wantoplay:boolean) => {
    if ( played ) {
      return (
        'rgb(255, 240, 153)'
)
    }
    
    if (!played && !wantoplay && !inprogress )  {
      return (
        '#FAFAFA'
      )
    }
    if ( inprogress )
    return (
      'rgb(255, 255, 208)'
    )

    if ( wantoplay ) {
      return (
        'rgb(255, 255, 208)'
)
    }
  }

  return (
    <Card style={{backgroundColor: cardBackground(inprogress, played, wanttoplay)}}  
    className={classes.root}
    >
          {open && 
          <Modal open={open}
    handleClickOpen={handleClickOpen}
    handleClose={handleClose}
    />}
      <CardHeader
        avatar={
          <Avatar className={!played ? classes.avatar : classes.ava} aria-label="recipe">
            {rate}
          </Avatar>
        }
        action={
          showAction(inprogress, played, wanttoplay)
        }
        title={name}
      />
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
      <div className={classes.rating}>
      <Rating
      size="large"
      readOnly 
        name="feedback"
        value={rate}
        precision={0.5}
      />
      ({popularity})
    </div>
        <Typography className={classes.info} variant="body2" color="textSecondary" component="p">
         {info}
        </Typography>
      </CardContent>
      <CardActions>
        {platforms.map((el:any,i:number)=>{
            return (
                <img key={i} height='20px' width='20px' src={el} alt=''/>
            )
        })}
      </CardActions>
    </Card>
  );
}

export default GameCard;

