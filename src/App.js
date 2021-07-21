import './App.css';
import Header from './components/header/Header';
import { Switch, Route } from 'react-router-dom';
import Quote from './components/parcel-quote/Quote';
import FinalQuote from './components/parcel-quote/FinalQuote';
import React, { useEffect } from 'react';

function App() {
  
  const PRICES =  {
    "UKUK1" : 8,
    "UKUK2" : 18,
    "UKUK3" : 20,
    "UKUK4" : 24,
    "PLPL1" : 6,
    "PLPL2" : 23,
    "PLPL3" : 34,
    "PLPL4" : 42,
    "PLUK1" : 16,
    "PLUK2" : 24,
    "PLUK3" : 38,
    "PLUK4" : 48,
    "CZCZ1" : 9,
    "CZCZ2" : 20,
    "CZCZ3" : 24,
    "CZCZ4" : 30,
    "CZUK1" : 30,
    "CZUK2" : 50,
    "CZUK3" : 60,
    "CZUK4" : 80,
    "CZPL1" : 20,
    "CZPL2" : 30,
    "CZPL3" : 40,
    "CZPL4" : 50,
  }
  const [price, setPrice] = React.useState(0);
  
  const displayQuote = (code,priceRange) => {
    let quoteCode = code+priceRange;
    setPrice(PRICES[quoteCode])
  }
  
  
  return (
    <div className="App">
        <Header/>
        <div className='container' >
        <Switch>
        <Route exact path='/' component={() => <Quote displayQuote={displayQuote} />} />
        <Route exact path='/final-quote' component={() => <FinalQuote price={price} />} />
        </Switch>
        </div>
    </div>
  );
}

export default App;
