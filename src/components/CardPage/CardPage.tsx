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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import { Button } from '@material-ui/core';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Reviews from "./Reviews";
import YouTube from '../YouTube/Youtube';


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
                width: '100%',
            },
            [theme.breakpoints.down('xs')]: {
                width: '100%',
                margin: 0,
                padding: 0,
            },
        },
        paper: {
            color: theme.palette.text.secondary,
            border: 'none',
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            fontSize: '14px',
            backgroundColor: 'transparent',
            height: 'inherit',
            marginBottom: 30
        },
        stats: {
            display: 'flex',
            padding: '20px 0',
            
        },
        rec: {
            display: 'flex',
            justifyContent: 'center',
            
        },
        divider: {
            border: `2px solid ${theme.palette.primary.light}`,
            margin: '0 5px'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 60px',
            [theme.breakpoints.down('sm')]: {
                padding: '0 10px',
                fontSize: '13px',
            },
        },
        grid: {
            flexGrow: 1,
            margin: '50px',
            maxWidth: '1200px',
            justifyContent:'center',
            [theme.breakpoints.down('md')]: {
                margin: 20,
            },
            [theme.breakpoints.down('sm')]: {
                margin: 10,
            },
        },
        list: {
            width: '100%',
            maxWidth: 400,
            backgroundColor: 'transparent'
        },
        tabs: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
          },
          body: {
              paddingLeft: '60px',
              [theme.breakpoints.down('sm')]: {
                padding: '0 10px',
            },
          },
          button: {
              height: '70px',
              marginTop: '50px',
              [theme.breakpoints.down('sm')]: {
                marginTop: 10,
                height: '50px',
            },
          },
    }),
);

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  

const CardPage = () => {
    const classes = useStyles();
    const data = Games;
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
      };
const hnadleSeeFriends = () => {
    console.log('check friends')
}
      function a11yProps(index: any) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

      function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <img src={data[0].jpg} alt='game' />
                        <div className={classes.body} >  <h4>
                            Recommend:
                        </h4>
                        <div className={classes.rec} >
                            <div >
                                <strong style={{ fontSize: '20px' }} >94%</strong>  <ThumbUp />
                            </div >
                            <div className={classes.divider} />
                            <div>
                                <ThumbDown />  <strong style={{ fontSize: '20px' }} >6%</strong>
                            </div>
                        </div>
                      
                        <Button
       onClick={hnadleSeeFriends}
        variant="contained"
        color="secondary"
        fullWidth
        className={classes.button}
        endIcon={<SupervisedUserCircleIcon/>}
      >
        FRIENDS and {data[0].name}
      </Button>
    </div>
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
                        <div className={classes.body} >
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
</div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>
                    <div className={classes.tabs}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="ALL REVIEWS" {...a11yProps(0)} />
          <Tab label="YOUTUBE PREVIEW" {...a11yProps(1)} />
          <Tab label="TWITCH PREVIEW" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <Reviews/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <YouTube/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        TWITCH
      </TabPanel>
    </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}


export default CardPage;