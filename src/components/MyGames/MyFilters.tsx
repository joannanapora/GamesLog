import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import GLButton from "../Buttons/GLButton";
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';

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

const MyFilters = () => {
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
        rp: false
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
        <FormLabel component="legend">Platform</FormLabel>
        <FormGroup className={classes.labels} >
            <FormControlLabel
            control={<Checkbox className={classes.checked}  checked={platform.mac} onChange={handlePlatformChange} name="mac" />}
            label="Mac OS"
          />
          <FormControlLabel
            control={<Checkbox className={classes.checked}  checked={platform.nintendo} onChange={handlePlatformChange} name="nintendo" />}
            label="Nintendo"
          />
              <FormControlLabel
           control={<Checkbox className={classes.checked}  checked={platform.stadia} onChange={handlePlatformChange} name="stadia" />}
           label="Stadia"
         />
          <FormControlLabel
            control={<Checkbox className={classes.checked}  checked={platform.ps} onChange={handlePlatformChange} name="ps" />}
            label="PlayStation"
          />
          <FormControlLabel
            control={<Checkbox className={classes.checked}  checked={platform.win} onChange={handlePlatformChange} name="win" />}
            label="Windows"
          />
            <FormControlLabel
           control={<Checkbox className={classes.checked}  checked={platform.xbox} onChange={handlePlatformChange} name="xbox" />}
           label="xBox"
         />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Genre</FormLabel>
        <FormGroup className={classes.labels} >
            <FormControlLabel
            control={<Checkbox className={classes.checked}  checked={genre.acad} onChange={handleGenreChange} name="acad" />}
            label="Action-adventure"
          />
            <FormControlLabel
              control={<Checkbox className={classes.checked}  checked={genre.owrac} onChange={handleGenreChange} name="owrac" />}
              label="Open-world racing"
            />
          <FormControlLabel
            control={<Checkbox className={classes.checked}  checked={genre.ssim} onChange={handleGenreChange} name="ssim" />}
            label="Social simulation"
          />
               <FormControlLabel
           control={<Checkbox className={classes.checked}  checked={genre.rp} onChange={handleGenreChange} name="rp" />}
           label="Role-playing"
         />
          <FormControlLabel
            control={<Checkbox className={classes.checked}  checked={genre.sport} onChange={handleGenreChange} name="sport" />}
            label="Sport"
          />
            <FormControlLabel
           control={<Checkbox className={classes.checked}  checked={genre.tb} onChange={handleGenreChange} name="tb" />}
           label="Turn-based strategy"
         />
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


export default MyFilters;