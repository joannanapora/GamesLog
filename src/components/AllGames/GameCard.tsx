import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import { Tooltip, Typography } from '@material-ui/core';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import Modal from '../Modal/Modal';
import { useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 290,
      maxWidth: 290,
      cursor: 'pointer',
      transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard,
      }),
      '& .MuiTypography-displayBlock': {
        fontFamily: 'Monda' 
      },
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    info: {
      minHeight: 120,
        fontFamily: 'Monda',
        fontSize: '13px'
    },
    header: {
      fontWeight: 500,
    },
    rating: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
  })
);



const GameCard = ({
  wanttoplay,
  inprogress,
  popularity,
  name,
  rate,
  image,
  platforms,
  info,
  status,
  path,
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
  status: string;
  path: any;
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const themeMaterial = useTheme();

  const handleClickOpen = (name: any) => {
    setOpen(true);
    addToGamesLog(name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeStatus = () => {

  }

  const addToGamesLog = (name: string) => {};

  return (
    <Link style={{textDecoration:'none'}} to={`/game${path}`} >
    <Card
      style={{
        backgroundColor: themeMaterial.palette.secondary.light,
      }}
      className={classes.root}
    >
      {open && (
        <Modal
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      )}
      <CardHeader
        avatar={
          <Avatar
            aria-label="rate"
          >
            {rate}
          </Avatar>
        }
        action={status === 'none' ? 
        <Tooltip title="Change game status" aria-label="add">
        <IconButton onClick={handleChangeStatus} >
          <LibraryAddIcon /> 
          </IconButton>
          </Tooltip>
          : null }
        title={name}
      />
      
      <CardMedia className={classes.media} image={image} />
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
        <Typography
          className={classes.info}
          variant="body2"
          component="p"
        >
          {info}
        </Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'flex-end', opacity: 0.3}} >
        {platforms.map((el: any, i: number) => {
          return <img key={i} height="20px" width="20px" src={el} alt="" />;
        })}
      </CardActions>
    </Card>
    </Link>
  );
};

export default GameCard;
