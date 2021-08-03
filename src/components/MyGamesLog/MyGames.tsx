import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react';
import {Games} from "../Data";
import MyGame from "./MyGame";
import Filters from '../AllGames/Filters';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListCard from './ListCard';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: '0 12%',
      flexDirection: 'row',
      [theme.breakpoints.down('md')]: {
        margin: 0,
        padding: 0,
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        margin: 0,
        padding: 0,
      },
    },
    grid: {
      flexGrow: 1,
      padding: 30,
      [theme.breakpoints.down('md')]: {
        display: 'flow-root',
        padding: 30,
      },
      [theme.breakpoints.down('sm')]: {
        padding: 10,
      },
    },
    view: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    viewButton: {
      height: '55px'
    },
    formControl: {
      margin: theme.spacing(1),
      width: '30%',

    },
    list: {
      width: '100%',
      backgroundColor: theme.palette.secondary.light,
    },
    rootList: {
      display: 'flex',
      margin: '0 12%',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: {
        margin: 0,
        padding: 0,
      },
    }
  }),
);

const MyGames = () => {
  const classes = useStyles();
  const data = Games;
  const [view, setView] = useState('grid');

  const handleSort = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  
  const [state, setState] = useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  return (
    view === 'grid' ? 
    <div className={classes.root} >
{/* <Filters/> */}
    <Grid container className={classes.grid}>
<ToggleButtonGroup className={classes.view}  exclusive >
<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Sort</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleSort}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Highest rate</option>
          <option value={20}>Lowest rate</option>
          <option value={50}>Last played</option>
          <option value={30}>A-Z</option>
          <option value={40}>Z-A</option>
        </Select>
      </FormControl>
      <ToggleButton onClick={()=>setView('list')} className={classes.viewButton} aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton onClick={()=>setView('grid')} className={classes.viewButton} aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
      <Grid item xs={12}>
        <Grid style={{width: '100%'}} container spacing={1} justifyContent="center">
            {
                data.map((card,i)=>{
                    return (
            <Grid key={i} item>
              <MyGame platformList={card.platformFinished} status={card.status} from={card.from} to={card.to} wanttoplay={card.wanttoplay} inprogress={card.inprogress}  popularity={card.popularity} played={card.played} info={card.shortInfo} platforms={card.platforms} name={card.name} rate={card.rate} image={card.jpg} />
</Grid>
                    )
                })
            }

        </Grid>
      </Grid>
    </Grid>
    </div>
    :
    <div className={classes.rootList} >
      <Grid container className={classes.grid}>
<ToggleButtonGroup className={classes.view} value={view} exclusive >
<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Sort</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleSort}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Highest rate</option>
          <option value={20}>Lowest rate</option>
          <option value={50}>Last played</option>
          <option value={30}>A-Z</option>
          <option value={40}>Z-A</option>
        </Select>
      </FormControl>
      <ToggleButton onClick={()=>setView('list')} className={classes.viewButton}aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton onClick={()=>setView('grid')} className={classes.viewButton} aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
    </Grid>
    <List className={classes.list}>
    {
                data.map((card,i)=>{
                    return (
            <Grid key={i} item>
              <ListCard platformList={card.platformFinished} status={card.status} from={card.from} to={card.to} wanttoplay={card.wanttoplay} inprogress={card.inprogress}  popularity={card.popularity} played={card.played} info={card.shortInfo} platforms={card.platforms} name={card.name} rate={card.rate} image={card.jpg} />
</Grid>
                    )
                })
            }
    </List>
    </div>
  );
}

export default MyGames;