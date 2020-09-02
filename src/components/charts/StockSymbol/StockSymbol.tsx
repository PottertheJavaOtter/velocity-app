import React from 'react'
import "./StockSymbolTicker.scss";
import { IonButton } from '@ionic/react';
interface StockSymbolTicker {
  ticker: string;
}

const StockSymbol: React.FC<StockSymbolTicker> = ({ ticker }) => {
  return (
    <IonButton size="small" className="StockSymbolTicker" href={`/stock/${ticker}`}>
      {ticker.toUpperCase()}
    </IonButton>
  )
}

export default StockSymbol;
