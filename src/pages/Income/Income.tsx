import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonDatetime,
  IonSelectOption,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonPopover,
  IonText,
  IonAvatar,
} from "@ionic/react";
import { ellipsisHorizontal, ellipsisVertical } from "ionicons/icons";
import AboutPopover from "../../components/AboutPopover";
import DividendBreakdown from "../../components/DividendBreakdown/DividendBreakdown";
import StockRow from "../../components/StockRow/StockRow";
import MonthlyIncomeMap from "../../components/charts/MonthlyIncomeMap/MonthlyIncomeMap";
import StockPie from "../../components/charts/StockPie/StockPie";

import "./Income.scss";

interface IncomeProps { }

const Income: React.FC<IncomeProps> = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState();

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };

  return (
    <IonPage id="income-page">
      <IonContent>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={presentPopover}>
                <IonIcon
                  slot="icon-only"
                  ios={ellipsisHorizontal}
                  md={ellipsisVertical}
                ></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className="IncomeHeader">
          <DividendBreakdown dividend={18908} />
        </div>

        <div>
          <IonList>
            <StockRow id="some-id" ticker="OKE" name="ONEOK" shares={981.2} dividendPerShare={102.1} />
          </IonList>
        </div>

        <StockPie />
        <MonthlyIncomeMap />
      </IonContent>

      <IonPopover
        isOpen={showPopover}
        event={popoverEvent}
        onDidDismiss={() => setShowPopover(false)}
      >
        <AboutPopover dismiss={() => setShowPopover(false)} />
      </IonPopover>
    </IonPage>
  );
};

export default React.memo(Income);
