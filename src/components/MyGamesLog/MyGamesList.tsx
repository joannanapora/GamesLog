import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react';
import {Games} from "../Data";
import GridCard from "./GridCard";
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
import CardsList from './CardsList';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CachedIcon from '@material-ui/icons/Cached';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: '2% 8%',
      flexDirection: 'column',
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
      padding: '50px',
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
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        padding: 0,
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
        margin: 0,
      },
    },
    viewButton: {
      height: '100%',
      width: '56px',
      [theme.breakpoints.down('sm')]: {
        margin: '10px 0',
        width: '68px'
      },
    },
    formControl: {
      margin: theme.spacing(1),
      width: '400px',
      [theme.breakpoints.down('sm')]: {
        width: '96%'
      },
    },
    list: {
      backgroundColor: theme.palette.secondary.light,
      flexDirection: 'column',
      alignItems: 'center',
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        padding: 0,
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: 0,
      },
    },
    settings: {
      padding: '30px 0',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: 0
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

  const showCards = () => {
    console.log('show cards')
  }
  
  const [state, setState] = useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const displaySettings = () => {
    return (
<ToggleButtonGroup className={classes.view} value={view} exclusive >
<div className={classes.settings} >
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
        </div>
        <div>
          <ToggleButton onClick={showCards} className={classes.viewButton}aria-label="list">
                  <DoneOutlineIcon />
                </ToggleButton>
                <ToggleButton onClick={showCards} className={classes.viewButton} aria-label="module">
                  <CachedIcon />
                </ToggleButton>
                <ToggleButton onClick={showCards} className={classes.viewButton} aria-label="module">
                  <VisibilityIcon />
                </ToggleButton>
          <ToggleButton onClick={()=>setView('list')} className={classes.viewButton}aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton onClick={()=>setView('grid')} className={classes.viewButton} aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </div>
        </ToggleButtonGroup>
    )
  }

  return (
    
    <div className={classes.root} >
{displaySettings()}
{view === 'grid' ? 
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Grid container spacing={2} justifyContent="center">
            {
                data.map((card,i)=>{
                    return (
            <Grid key={i} item>
              <GridCard from={card.from} to={card.to} status={card.status} wanttoplay={card.wanttoplay} inprogress={card.inprogress} popularity={card.popularity} played={card.played} info={card.shortInfo} platforms={card.platforms} name={card.name} rate={card.rate} image={card.jpg} />
</Grid>
                    )
                })
            }
        </Grid>
      </Grid>
    </Grid>
:
              <CardsList />
};
              </div>
  )
};

export default MyGames;