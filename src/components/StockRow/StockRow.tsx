import React from 'react'
import { IonItem, IonAvatar, IonLabel, IonNote } from '@ionic/react'
import { formatDecimalToDollars } from '../../util/moneyFormatter'

interface StockRowProps {
  /** The id of this stock entry */
  id: string;
  /** The image url of the stock */
  avatar?: string;
  /** Name of the company */
  name: string;
  /** Stock ticker symbol */
  ticker: string;
  /** Number of shares owned */
  shares: number;
  /** The annual dividend amount per share*/
  dividendPerShare: number;
}
const StockRow: React.FC<StockRowProps> = ({ id, name, ticker, shares, dividendPerShare = 0, avatar = "https://picsum.photos/100/100" }) => {
  const annualDividnd = formatDecimalToDollars(dividendPerShare * shares);
  return (
    <IonItem href={`/stock/${id}`} data-testid={`stock-row-${ticker}`}>
      <IonAvatar slot="start">
        <img src={avatar} />
      </IonAvatar>
      <IonLabel>
        <h2>{`${name} (${ticker})`}</h2>
        <p>Shares: {shares}</p>
      </IonLabel>
      <IonNote slot="end" color="primary">{annualDividnd}</IonNote>
    </IonItem>
  )
}

export default StockRow
