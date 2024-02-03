import React from 'react';
import '../styles/Home.css';
import Routing from '../routes/Routing';

function Home() {
  return (
    <>
    <div className='home'>
        <div className='search-box'>
            <input type="text" className='search-input' placeholder="Enter your search..." />
        </div>
        <div className='button-group'>
            <button className='symbol-button'>Supported Symbol</button>
            <button className='live-rates-button'>Live Rates</button>
            <button className='historical-rates-button'>Historical Rates</button>
            <button className='convert-button'>Currency Convert</button>
            <button className='timeframe-button'>TimeFrame Query</button>
            <button className='change-query-button'>Change Query</button>
        </div>
    </div>
    <div className='random-routes'>
      <Routing/>
    </div>
    </>
  )
}

export default Home;
