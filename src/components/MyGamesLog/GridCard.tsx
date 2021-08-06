import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Modal from '../Modal';
import { useTheme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Avatar, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardHeader from '@material-ui/core/CardHeader';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     width: '200px',
      transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard,
      }),
      '&:hover': {
        transform: 'scale(1.03)',
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
     fontSize: '10px'
    },
    rating: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
    content: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '2px 0',
      fontSize: '13px',
      color: ''
    },
    name: {
      width: '120px',
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',  
    },
    head: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: '10px',
      fontSize: '0.875rem'
    },
  })
);

interface IGridCard {
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
  from: string;
  to: string;
}

const GridCard = ({
  wanttoplay,
  inprogress,
  popularity,
  name,
  rate,
  image,
  platforms,
  info,
  status,
  from,
  to
}:IGridCard) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const themeMaterial = useTheme();

  const handleClickOpen = (name: string) => {
    setOpen(true);
    addToGamesLog(name);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSettingsOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const addToGamesLog = (name: string) => {};
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleCloseSettings = () => {
    setAnchorEl(null);
  };

  return (
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
      <div className={classes.head}>
        {name}
        <IconButton
        aria-controls="simple-menu" aria-haspopup="true" onClick={handleSettingsOpen}>
            <MoreVertIcon />
          </IconButton>   
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseSettings}
      >
        <MenuItem onClick={handleCloseSettings}>Update</MenuItem>
        <MenuItem onClick={handleCloseSettings}>Remove</MenuItem>
      </Menu>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
      <div className={classes.content}>
          <div>Status</div>
          <div>{status}</div>
          </div>
          <div className={classes.content}>
          <div>Score</div>
          <div>{rate}</div>
          </div>
        <div className={classes.content}>
          <div>Start</div>
          <div>{from}</div>
          </div>
          <div className={classes.content}>
          <div>Finish</div>
          <div>{to}</div>
          </div>
          <div className={classes.content}>
          <div>Platforms</div>
          <div >  {platforms.map((el: any, i: number) => {
          return <img  key={i} height="15px" style={{margin: '0 1px'}} width="15px" src={el} alt="" />;
        })}</div>
          </div>
      </CardContent>
    </Card>
  );
};

export default GridCard;
