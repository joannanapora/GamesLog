import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import GLButton from '../Buttons/GLButton';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import { statusList, genreList, platformList } from '../Data';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '300px',
      display: 'flex',
      flexDirection: 'column',
    },
    formControl: {
      margin: theme.spacing(1),
    },
    labels: {
display: 'flex',
flexDirection: 'column',

    },
    sliderBox: {
            width: '100%',
            padding: theme.spacing(1),
    },
    slider:{
        color: '#EB5254',
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
        width: '115%',
        borderBottom: '1px solid #EB5254 '
        
      },
      paper: {
        zIndex: 1,
        position: 'relative',
        border: 'none',
        boxShadow: 'none'

      },
      formSort: {
        width: '100%',
      },
    checked: {
        color: '#EB5254',
        "&$checked": {
            color: '#EB5254'
          }
    }},
    ),
);


function valuetext(value: number) {
    return `${value}`;
}

const Filters = () => {
    const classes = useStyles();
    const [platform, setPlatform] = React.useState({
        nintendo: false,
        ps: false,
        xbox: false,
        win: false,
        mac: false,
        stadia: false,
    });
    
    const [genre, setGenre] = React.useState({
        ssim: false,
        sport: false,
        tb: false,
        owrac: false,
        acad: false,
        rp: false,
        sv: false
    });

    const [status, setStatus] = React.useState({
      played: false,
      inprogress: false,
      wanttoplay: false,
      neverplayed: false,
  });
    
    const [value, setValue] = React.useState<number[]>([1, 5]);
    const [filtersOn, setFiltersOn] = React.useState(true);
    
  const handleSlider = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handlePlatformChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlatform({ ...platform, [event.target.name]: event.target.checked });
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre({ ...genre, [event.target.name]: event.target.checked });
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus({ ...status, [event.target.name]: event.target.checked });
  };


  const handleSearch = () => {
  }

  const handleFilters = () => {
    setFiltersOn((prev) => !prev);
  }


  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
        value: 5,
        label: '5',
      },
  ];

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#EB5254',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#EB5254',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#EB5254',
        },
        '&:hover fieldset': {
          borderColor: '#EB5254',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#EB5254',
        },
      },
    },
  })(TextField);


  const test = 'played';


  return (
    <div className={classes.root}>
               <CssTextField
        className={classes.formControl}
        label="Search game"
        variant="outlined"
        id="custom-css-outlined-input"
      />
           {window.innerWidth < 600 ?
<GLButton onClick={handleFilters} label={!filtersOn ? 'show filters' : 'hide filters'} />
: null
           }
            {filtersOn && 
    <Zoom in={filtersOn}>
          <Paper elevation={4} className={classes.paper}>
          <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Status</FormLabel>
        <FormGroup className={classes.labels} >
          {
            statusList.map((el,i)=>{
              return (
                <FormControlLabel
                control={<Checkbox className={classes.checked}  checked={status[el.name]} onChange={handleStatusChange} name={el.name} />}
                label={el.label}
              />
              )
            })
          }
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Platform</FormLabel>
        <FormGroup className={classes.labels} >
        {
            platformList.map((el)=>{
              return (
                <FormControlLabel
                control={<Checkbox className={classes.checked}  checked={platform[el.name]} onChange={handlePlatformChange} name={el.name} />}
                label={el.label}
              />
              )
            })
          }
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Genre</FormLabel>
        <FormGroup className={classes.labels} >
        {
            genreList.map((el)=>{
              return (
                <FormControlLabel
                control={<Checkbox className={classes.checked}  checked={genre[el.name]} onChange={handleGenreChange} name={el.name} />}
                label={el.label}
              />
              )
            })
          }
        </FormGroup>
      </FormControl>
      <div className={classes.sliderBox}>
      <FormLabel component="legend">Rate</FormLabel>
      <Slider
      className={classes.slider}
      max={5}
      min={1}
      value={value}
      onChange={handleSlider}
      aria-labelledby="range-slider"
      getAriaValueText={valuetext}
      marks={marks}
      />
          <GLButton onClick={handleSearch} label={'Search'} />
      </div>
          </Paper>
        </Zoom>
    }
    </div>
  );
}


export default Filters;