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
    review: {
        padding: '0 10%',
        width: '85%',
        fontStyle: 'italic',
        fontSize: '13px'
    },
    myreview: {
        backgroundColor: theme.palette.primary.light,
    },
    listitem: {
      padding: '5px 0',
    }
  }),
);

const Reviews = () => {
  const classes = useStyles();

  return (
      <div>
    <List className={classes.root}>
        <h4>
            My Animal Crossing review:
            </h4>
    <div className={classes.myreview}>
    <ListItem className={classes.listitem} >
      <ListItemAvatar>
        <Avatar>
          <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_0b9c655083c9.jpg' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Porczi"/>
      <ListItemText primary='12/03/2020' />
      <ListItemText primary='2.1' />


      <ListItemText primary={  <Rating
            size="small"
          readOnly
          name="feedback"
          value={2.2}
          precision={0.5}
        />} />
    </ListItem>
    <div className={classes.review} >
        "Ujdzie"
    </div>
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
      <ListItemText primary="Tankusowaty"/>
      <ListItemText primary='12/03/2020' />
      <ListItemText primary='2.6' />


      <ListItemText primary={  <Rating
            size="small"
          readOnly
          name="feedback"
          value={2.6}
          precision={0.5}
        />} />
    </ListItem>
    <div className={classes.review} >
        "Ujdzie"
   
    </div>
    <Divider variant="inset" component="li" />
    <ListItem className={classes.listitem} >
      <ListItemAvatar>
        <Avatar>
        <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_737fa88661c6.jpg' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Phoenicia4"/>
      <ListItemText primary='12/03/2020' />
      <ListItemText primary='1.1' />


      <ListItemText primary={  <Rating
            size="small"
          readOnly
          name="feedback"
          value={1.1}
          precision={0.5}
        />} />
    </ListItem>
    <div className={classes.review} >
        "nie zagram w to wiecej nara"
    </div>
  
    <Divider variant="inset" component="li" />
    <ListItem className={classes.listitem} >
      <ListItemAvatar>
        <Avatar>
        <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_737fa88661c6.jpg' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Adusia"/>
      <ListItemText primary='12/03/2020' />
      <ListItemText primary='2.1' />


      <ListItemText primary={  <Rating
            size="small"
          readOnly
          name="feedback"
          value={2.2}
          precision={0.5}
        />} />
    </ListItem>
    <div className={classes.review} >
        "zawiodłam sie"
    </div>
    
    <Divider variant="fullWidth" />
  </List>
  </div>
  );
}


export default Reviews;