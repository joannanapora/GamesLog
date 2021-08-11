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
    },
    review: {
        padding: '20px 10%',
        width: '85%',
        fontStyle: 'italic'
    },
    myreview: {
        backgroundColor: theme.palette.primary.light,
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
    <ListItem >
      <ListItemAvatar>
        <Avatar>
          <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_0b9c655083c9.jpg' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Porczi" secondary={  <Rating
            size="medium"
          readOnly
          name="feedback"
          value={2.2}
          precision={0.5}
        />} />
        
      <ListItemText primary='Score'  secondary='3.3' />
      <ListItemText primary='Date'  secondary='12/03/2020' />
    </ListItem>
    <div className={classes.review} >
        "Ujdzie"
    </div>
    </div>
    <Divider variant="inset" component="li" />
    <h4>
            Other Players reviews:
            </h4>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_0b9c655083c9.jpg' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Tankusowaty" secondary={  <Rating
          size="medium"
          readOnly
          name="feedback"
          value={3.3}
          precision={0.5}
        />} />
        
      <ListItemText primary='Score'  secondary='3.3' />
      <ListItemText primary='Date'  secondary='12/03/2020' />
    </ListItem>
    <div className={classes.review} >
        "Gierka była super , ho ho, zagłabym jeszcze raz. Polecam wszystkim małym i dużym dzieciom, dorosłym i panu z psem"
    </div>
    <Divider variant="inset" component="li" />
    <ListItem>
      <ListItemAvatar>
        <Avatar>
        <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_737fa88661c6.jpg' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Phoenicia4" secondary={  <Rating
           size="medium"
          readOnly
          name="feedback"
          value={1.3}
          precision={0.5}
        />} />
         <ListItemText primary='Score'  secondary='1.3' />
      <ListItemText primary='Date'  secondary='12/03/2020' />
    </ListItem>
    <div className={classes.review} >
        "Ojej, nie zagram już w to gónwo, nie polecam nikomu, unfollow"
    </div>
    <Divider variant="inset" component="li" />
    <ListItem>
      <ListItemAvatar>
        <Avatar>
        <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_737fa88661c6.jpg' />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Adusia420" secondary={  <Rating
          size="medium"
          readOnly
          name="feedback"
          value={4.9}
          precision={0.5}
        />} />
           <ListItemText primary='Score'  secondary='4.9' />
      <ListItemText primary='Date'  secondary='12/03/2020' />
    </ListItem>
    <div className={classes.review} >
        "O BoRzE!!! Ufffielbiam to! btw. Cardano to the moon"
    </div>
    <Divider variant="inset" component="li" />
  </List>
  </div>
  );
}


export default Reviews;