import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {ReactComponent as Logo} from '../../logo.svg'
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    boxShadow: 'none'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quote: {
      height: '50px',
      display: 'flex',
      fontSize: '20px',
      fontWeight: '500',
      padding: '0 20px',
      fontSize: '1rem',
  },
  button: {
      backgroundColor: 'orange',
      margin: '20px'
  },
  logo: {
      margin: '20px'
  }
});

const  FinalQuote = ({history, price}) => {
  const classes = useStyles();

  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(()=>{
      setFinalPrice(price);
  },[price])


  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}  >
      <Logo className={classes.logo} width='100px' height='100px' />
       <div className={classes.quote} >BEST PRICE:</div>
       <div className={classes.quote} >{finalPrice} £</div>
       <div className={classes.quote} >Next Day Delivery</div>
      <div>
          <Button  className={classes.button} onClick={()=>history.push('/')} >Go Back</Button>
          <Button className={classes.button}>BOOK</Button>
          </div>
      </CardContent>
    </Card>
  );
}

export default withRouter(FinalQuote);
