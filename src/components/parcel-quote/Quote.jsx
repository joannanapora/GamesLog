import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid: {
        maxWidth: 600,
        backgroundColor: 'orange'
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        backgroundColor: 'orange',
        padding: '10px',
        margin: '20px'
    }
}));


const countries = ["United Kingdom", "Czech Republic", "Poland",];




const Quote = ({history,displayQuote}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState({
        from: 'United Kingdom',
        to: 'United Kingdom',
        weight: 1
    });

    useEffect(() => {

    }, [value])


    const getCode = () => {
        let code;
        const fromTo = `${value.from}` + `${value.to}`;
        switch (fromTo) {
            case "Czech RepublicPoland":
            case "PolandCzech Republic":
                code = "CZPL";
                break;

            case "Czech RepublicUnited Kingdom":
            case "United KingdomCzech Republic":
                code = "CZUK";
                break;

            case "Czech RepublicCzech Republic":
                code = "CZCZ";
                break;

            case "United KingdomPoland":
            case "PolandUnited Kingdom":
                code = "PLUK";
                break;

            case "United KingdomUnitedKingdom":
                code = "UKUK";
                break;

            case "PolandPoland":
                code = "PLPL";
                break;
            default:
                code = "UKUK";
                break;
        }
        return code;
    }


    const getPriceRange = () => {
        const weight = value.weight; // 14kg

        if (weight < 10) {
           return "1"
        }
        if (weight < 20) {
            return "2"
         }
         if (weight < 30) {
            return "3"
         }
         if (weight > 30) {
            return "4"
         }
    }


    const handleChange = (event, name) => {
        if (name === 'weight' && event.target.value < 0 || name === 'weight' && event.target.value[0] === '0' ) {
            setValue({ ...value, weight: 1 });
        } else {
            setValue({ ...value, [name]: event.target.value });
        }

    };

    const getQuote = () => {
        const code = getCode();
        const priceRange = getPriceRange();
        displayQuote(code,priceRange)
        history.push('/final-quote')
    }


    return (
        <div className={classes.gridContainer}>
            <h3>GET PARCEL DELIVERY QUOTE</h3>
            <Grid className={classes.grid} container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <NativeSelect
                                className={classes.selectEmpty}
                                value={value.from}
                                name="from"
                                onChange={(e) => handleChange(e, 'from')}
                                inputProps={{ 'aria-label': 'age' }}
                            >
                                {
                                    countries.map((el, i) => {
                                        return (
                                            <option key={i} value={el}>{el}</option>
                                        )
                                    })
                                }
                            </NativeSelect>
                            <FormHelperText>From</FormHelperText>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                            <NativeSelect
                                className={classes.selectEmpty}
                                value={value.to}
                                name="to"
                                onChange={(e) => handleChange(e, 'to')}
                                inputProps={{ 'aria-label': 'age' }}
                            >
                                {
                                    countries.map((el, i) => {
                                        return (
                                            <option key={i} value={el}>{el}</option>
                                        )
                                    })
                                }
                            </NativeSelect>
                            <FormHelperText>To</FormHelperText>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                            <Input
                                name="weight"
                                type="number"
                                id="standard-adornment-weight"
                                value={value.weight}
                                onChange={(e) => handleChange(e, 'weight')}
                                endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                                aria-describedby="standard-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                            <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
            <Button disabled={value.weight === "" ||value.weight === 0  } className={classes.button} onClick={getQuote}>Get Quote</Button>
        </div>
    );
}

export default withRouter(Quote);