import React from 'react'

interface StockSymbolTicker {
  ticker: string;
}

const StockSymbol: React.FC<StockSymbolTicker> = ({ ticker }) => {
  return (
    <a href={`/stock/${ticker}`}>
      {ticker.toUpperCase()}
    </a>
  )
}

export default StockSymbol;
