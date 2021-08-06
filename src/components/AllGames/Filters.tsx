import React from 'react';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import { ratingList, genreList, platformList } from '../Data';
import { useTheme } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '300px',
      display: 'flex',
      flexDirection: 'column',
      margin: 10,
      padding: 10,
      '& .MuiTypography-body1': {
        fontSize: '14px',
        fontFamily: 'Monda' 
      },
      
      [theme.breakpoints.down('xs')]: {
        borderRight: 'none',
        width: '90%',
      },
      '& .MuiFormLabel-root': {
        color: theme.palette.secondary.contrastText,
        fontFamily: 'Monda' 
      },
    },
    buttonCtn: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    },
    formControl: {
      margin: theme.spacing(1),
      borderBottom: '3px solid #DFEEEA',
      width: '100%',
    },
    labels: {
display: 'flex',
flexDirection: 'column',
    },

    buttons:{ 
      display: 'flex',
      paddingBottom: '10px'
    },
    button: {
      width: '100%',
      fontSize: '0.6rem'
    },

      paper: {
        zIndex: 1,
        position: 'relative',
        border: 'none',
        boxShadow: 'none',
        background: 'none',
        width: '100%',
      },
      formSort: {
        width: '100%',
      },
    checked: {
        color: theme.palette.secondary.contrastText,
        
        "&$checked": {
            color: theme.palette.secondary.contrastText,          }
    }
  },
    ),
);




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


    const [rating, setRating] = React.useState({
     one: false,
     two: false,
     three: false,
     four: false,
     five: false,
  });

    
    const [filtersOn, setFiltersOn] = React.useState(true);
    const themeMaterial = useTheme();


  const handlePlatformChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlatform({ ...platform, [event.target.name]: event.target.checked });
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre({ ...genre, [event.target.name]: event.target.checked });
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating({ ...rating, [event.target.name]: event.target.checked });
  };


  const handleSearch = () => {
  }

  const handleFilters = () => {
    setFiltersOn((prev) => !prev);
  }

  const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: themeMaterial.palette.secondary.light,    
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: themeMaterial.palette.secondary.light,    
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: themeMaterial.palette.secondary.light,    
        },
        '&:hover fieldset': {
          borderColor: themeMaterial.palette.secondary.light,    
        },
        '&.Mui-focused fieldset': {
          borderColor: themeMaterial.palette.secondary.light,    
        },
      },
    },
  })(TextField);


  return (
    <div className={classes.root}>
               <CssTextField
        label="Search game..."
        variant="outlined"
        id="custom-css-outlined-input"
      />
      <div className={classes.buttons} >
       <Button
       className={classes.button}
       onClick={handleFilters}
        variant="contained"
        color="secondary"
        startIcon={<FilterListIcon />}
      >
        Filters
      </Button>
      <Button
       className={classes.button}
       onClick={handleSearch}
        variant="contained"
        color="secondary"
        startIcon={<SearchIcon />}
      >
      search
      </Button>
      </div>
            {filtersOn && 
    <Zoom in={filtersOn}>
          <Paper elevation={4} className={classes.paper}>
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
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Rating</FormLabel>
        <FormGroup className={classes.labels} >
        {
            ratingList.map((el,i)=>{
              return (
                <FormControlLabel
                control={<Checkbox className={classes.checked}  checked={rating[el.name]} onChange={handleRatingChange} name={el.name} />}
                label={el.label}
              />
              )
            })
          }
        </FormGroup>
      </FormControl>
          </Paper>
        </Zoom>
    }
    </div>
  );
}


export default Filters;