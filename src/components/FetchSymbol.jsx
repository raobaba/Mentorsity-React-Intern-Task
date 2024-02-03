import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Supported Symbols</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.entries(symbols).map(([symbol, description]) => (
            <li key={symbol}>
              <strong>{symbol}:</strong> {description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ForexSymbols;
