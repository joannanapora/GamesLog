import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Games } from "../Data";
import Rating from '@material-ui/lab/Rating';
import Filters from '../Games/Filters';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                width: '100%',
                display: 'flex',
                alignItems: 'center'
            },
        },
        snackbar: {
            backgroundColor: 'white',
            color: 'black',
            fontStyle: 'italic'
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(17),
            color: theme.palette.text.secondary,
            margin: 10
        },
        headings: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        accordions: {
            minWidth: '400px',
            flex: 1,
        },
        rating: {
            display: 'flex',
            alignItems: 'center',
            width: '120px',
            justifyContent: 'space-between',
            margin: '0 10px'
        }
    }),
);

const MyLog = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [review, showReview] = React.useState<boolean>(false);
    const data = Games;
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    const addReview = (id:string) => {
        showReview(!review);
    }

    const message = "It's very much a long term game, If you enjoy the first few days you'll probably want to get your island as nice as possible. So I'd totally recommend it. If it's too much money and you have a DS id also recommend New Leaf, it's the game pretty much before new horizons and it's very similar"

    return (
        <div className={classes.root}>
            <Filters />
            <div className={classes.accordions}>
                {data.map((el, i) => {
                    return (
                        <Accordion key={el.id} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <img width='150px' alt='' src={el.jpg} ></img>
                                <div className={classes.headings}>
                                    <Typography className={classes.secondaryHeading}>{el.name}</Typography>
                                    <div className={classes.rating}
                                    > <Rating
                                            size="small"
                                            readOnly
                                            name="feedback"
                                            value={el.rate}
                                            precision={0.5}
                                        />{el.rate}                </div>  </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={classes.headings} >
                                <SnackbarContent
                                className={classes.snackbar}
                                
        message={`"${message}"`}
        action={
            <Button color="secondary" onClick={()=>addReview(el.id)} size="small">
            EDIT REVIEW
          </Button>
        }
       variant="outlined" />
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    )
                })}
            </div>
        </div>
    );
}

export default MyLog;