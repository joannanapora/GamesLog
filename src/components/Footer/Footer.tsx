import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import mainLogo from'../../gl.png';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    column: {
        fontSize:'18px',
        color: theme.palette.primary.contrastText,
    },
      details: {
        alignItems: 'center',
      },
      helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
      },
      link: {
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
      },
      grid: {
        padding: '30px 30%',
        height: '10%',
        alignContent: 'center',
        backgroundColor: theme.palette.primary.light,
        [theme.breakpoints.down('md')]: {
            padding: '30px 50px 10px 50px',
          },
          [theme.breakpoints.down('md')]: {
            padding: '20px'
          },
    },
      
  }),
);

const Footer = () => {
  const classes = useStyles();


  return (
    <Grid className={classes.grid} container>
      <Grid item xs={3}>
      <div className={classes.column}>
            <div>About</div>
            <div>Career</div>
            <div>Design</div>
            <div>Sponsors</div>
          </div>
      </Grid>
      <Grid item xs={3}>
      <div className={classes.column}>
         <div>
         Contact us:
             </div> 
             <div>
             Joanna 
             </div> 
             <div>
             07564 247045
             </div> 
             <div>
             Adrianna 
             </div> 
             <div>
             07564 243826
             </div>
          </div>
      </Grid>
   
      <Grid item xs={3}>
      <div className={classes.column}>
         <div>
         Address:
             </div> 
             <div>
             420 Slonecznego Ranka
             </div> 
             <div>
             M6 12RL
             </div> 
             <div>
             Manchester, United Kingdom
             </div> 
          </div>
      </Grid>
      <Grid item xs={3}>
      <AccordionDetails className={classes.details}>
<div className={clsx(classes.column, classes.helper)}>
  <Typography variant="caption">
   Fallow Us:
    <br />
    <a href="#secondary-heading-and-columns" className={classes.link}>
    <TwitterIcon/> <FacebookIcon/> <InstagramIcon/> <GitHubIcon/>
    </a>
  </Typography>
</div>
</AccordionDetails>
      </Grid>
      <Grid style={{display:'flex', justifyContent:'center', marginTop: '50px', fontSize: '18px'}} justifyContent='center' item xs={12}>
      <div className={classes.column} >
      Copyright © 2022 Design by SuperProgramisci of SuperStronki
          </div> 
      </Grid>
    </Grid>
  );
}


export default Footer;