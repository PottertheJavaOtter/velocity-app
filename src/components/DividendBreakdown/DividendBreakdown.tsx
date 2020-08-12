import React from "react";
import { IonText } from "@ionic/react";
import { formatDecimalToDollars } from "../../util/moneyFormatter";

import "./DividendBreakdown.scss";

interface DividendBreakdownProps {
  /** The total annual dividend */
  dividend: number;
}
const DividendBreakdown: React.FC<DividendBreakdownProps> = ({ dividend }) => {
  const annualDividend = formatDecimalToDollars(dividend);
  const quarterlyDividend = formatDecimalToDollars(dividend / 4);
  const dailyDividend = formatDecimalToDollars(dividend / 12);

  return (
    <section className="DividendBreakdown">
      <IonText color="dark">
        <h5>Annually</h5>
        <p>{annualDividend}</p>
      </IonText>
      <div className="DividendBreakdown__columns">
        <IonText color="dark">
          <h5>Quarterly</h5>
          <p>{quarterlyDividend}</p>
        </IonText>
        <IonText color="dark">
          <h5>Monthly</h5>
          <p>{dailyDividend}</p>
        </IonText>
      </div>
    </section>
  );
};

export default DividendBreakdown;
