import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Games } from "../Data";
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '30px',
            margin: '2% 8%',
            justifyContent:'center',
            display: 'flex',
            [theme.breakpoints.down('md')]: {
                margin: 0,
                padding: 0,
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                margin: 0,
                padding: 0,
            },
        },
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
            border: 'none',
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            fontSize: '14px',
            backgroundColor: 'transparent'
           
        },
        stats: {
            display: 'flex',
            padding: '20px 0',
        },
        rec: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '20px'
        },
        divider: {
            border: `2px solid ${theme.palette.primary.light}`,
            margin: '0 5px'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            borderLeft: `7px solid ${theme.palette.primary.light}`,
            paddingLeft: '20px'
        },
        grid: {
            flexGrow: 1,
            padding: '50px',
            maxWidth: '1200px',
            justifyContent:'center',
            [theme.breakpoints.down('md')]: {
                display: 'flow-root',
                padding: 30,
            },
            [theme.breakpoints.down('sm')]: {
                padding: 10,
            },
        },
        list: {
            width: '100%',
            maxWidth: 400,
            backgroundColor: 'transparent'
        }
    }),
);

const CardPage = () => {
    const classes = useStyles();
    const data = Games;

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <img src={data[0].jpg} alt='game' />
                        <div className={classes.rec} >
                            <div >
                                <strong style={{ fontSize: '20px' }} >94%</strong>  <ThumbUp />
                            </div >
                            <div className={classes.divider} />
                            <div>
                                <ThumbDown />  <strong style={{ fontSize: '20px' }} >6%</strong>
                            </div>
                        </div>
                        <h4>
                            Friends with {data[0].name} in GamesLog:
                        </h4>
                        <List className={classes.list}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_0b9c655083c9.jpg' />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Tankusowaty" secondary="Score: 6.9" />
        <ListItemText  secondary="Review" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <img alt='avatar' height='100%' width='100%' src='https://samequizy.pl/wp-content/uploads/2019/01/filing_images_737fa88661c6.jpg' />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phoenicia4" secondary="Score: 8.1" />
        <ListItemText  secondary="" />
      </ListItem>
      <Divider variant="inset" component="li" />
<p>
      See More...
</p>
    </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <div className={classes.header} >
                            <h1>
                                {data[0].name}
                            </h1>
                            <h1>
                                {data[0].rate}/10
                            </h1>
                        </div>
                        <h4>
                            Statisctics:
                        </h4>

                        <li>Played: 2120 </li>

                        <li>Finished: 1578 (74,43%)</li>

                        <li>Dropped: 542 (25.56%)</li>


                        <li>Playing now: 27</li>

                        <li>Want to play: 16</li>
                        <h4>
                            Platforms used:</h4>
                        <li>MacOS: 0%</li>


                        <li>Nintendo: 100% </li>


                        <li>PlayStation: 0%</li>


                        <li>Windows: 0%</li>


                        <li>xBox: 0%</li>
                        <h4>
                            Activity:
                        </h4>
                        <li>123 reviews</li>
                        <li>492 comments </li>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>
               TABS
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}


export default CardPage;