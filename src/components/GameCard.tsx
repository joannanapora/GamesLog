import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import nintendo from "../assets/games/nintendo.png"
import { Typography } from '@material-ui/core';


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
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    info: {
        minHeight: 120,
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
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
    }
  }),
);

const GameCard = ({name, rate, image, platforms, info}: {name:string, rate: number, image: any, platforms: any, info: string }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number | null>(0);
  const [hover, setHover] = React.useState(-1);

  const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {rate}
          </Avatar>
        }
        action={
            <IconButton className={classes.heart} aria-label="add to favorites">
            <FavoriteIcon />
           </IconButton>
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
        name="hover-feedback"
        value={value}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
        <Typography className={classes.info} variant="body2" color="textSecondary" component="p">
         {info}
        </Typography>
      </CardContent>
      <CardActions>
        {platforms.map((el:any)=>{
            return (
                <img height='35px' width='35px' src={el} alt=''></img>
            )
        })}
      </CardActions>
    </Card>
  );
}

export default GameCard;