import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      '& .MuiBox-root-77': {
        [theme.breakpoints.down('sm')]: {
          margin: 0,
          padding: 0,
        },
      },
    },
    gamepageContainer: {
      padding: '10px 40px',
      [theme.breakpoints.down('sm')]: {
        padding: '5px 20px',
      },
    }
    ,
    review: {
        padding: '0 7%',
        width: '85%',
        fontStyle: 'italic',
        fontSize: '13px',
        [theme.breakpoints.down('sm')]: {
          padding: 0,
        },
    },
    myreview: {
        backgroundColor: theme.palette.primary.light,
        padding: '10px'
    },
    listitem: {
      padding: '5px 0',
    }
  }),
);

const Reviews = () => {
  const classes = useStyles();

  return (
      <div className={classes.gamepageContainer} >
    <List className={classes.root}>
        <h4>
            My Animal Crossing review:
            </h4>
    <div className={classes.myreview}>
    <ListItem className={classes.listitem} >
      <ListItemAvatar>
        <Avatar>
          <img  alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_0b9c655083c9.jpg' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Porczi" secondary="12/12/2021"/>
    </ListItem>
    <div className={classes.review} >
       <p>
         "I love this game!"
         </p> 
         Score 4.5
        <Rating
        style={{marginLeft: '10px'}}
            size="small"
          readOnly
          name="feedback"
          value={4.5}
          precision={0.5}
        />
    </div>
    <Divider component="li" />
    </div>
    <h4>
            Other Players reviews:
            </h4>
            <ListItem className={classes.listitem} >
      <ListItemAvatar>
        <Avatar>
          <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_0b9c655083c9.jpg' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Tankusowaty" secondary="12/12/2021"/>
    </ListItem>
    <div className={classes.review} >
       <p>
         "Ujdzie"
         </p> 
         Score 3.4
        <Rating
        style={{marginLeft: '10px'}}
            size="small"
          readOnly
          name="feedback"
          value={2.6}
          precision={0.5}
        />
    </div>
    <Divider component="li" />
  </List>
  </div>
  );
}


export default Reviews;