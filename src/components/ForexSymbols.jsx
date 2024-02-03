import React, { useState, useEffect } from 'react';
import '../styles/FarexSymbol.css';

const ForexSymbols = () => {
  const [symbols, setSymbols] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.forexrateapi.com/v1/symbols?api_key=f53ad6ce073023f1bb29e5f640d9edba`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.success) {
          setSymbols(data.symbols);
        } else {
          console.error('API request failed');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='forex-symbol'> {/* Update this line */}
      <h1>Supported Symbols</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid-container">
          {Object.entries(symbols).map(([symbol, description]) => (
            <div className="grid-item" key={symbol}>
              <strong>{symbol}:</strong> {description}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ForexSymbols;
