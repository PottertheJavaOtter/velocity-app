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
  IonList,
  IonPopover,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
} from "@ionic/react";
import { ellipsisHorizontal, ellipsisVertical } from "ionicons/icons";
import DividendBreakdown from "../../components/DividendBreakdown/DividendBreakdown";
import StockRow from "../../components/StockRow/StockRow";
import AboutPopover from "../../components/AboutPopover";
import faker from "faker";
import "./Portfolio.scss";
import StockSymbol from "../../components/charts/StockSymbol/StockSymbol";

interface PortfolioProps { }

const Portfolio: React.FC<PortfolioProps> = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverEvent, setPopoverEvent] = useState();
  const [searchTicker, setSearchTicker] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const presentPopover = (e: React.MouseEvent) => {
    setPopoverEvent(e.nativeEvent);
    setShowPopover(true);
  };

  return (
    <IonPage id="portfolio-page">
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

        <div className="PortfolioHeader">
          <IonItem>
            <IonInput value={searchTicker} placeholder="Search company" onIonBlur={() => setSearchFocused(false)} onIonFocus={() => setSearchFocused(true)} onIonChange={e => setSearchTicker(e.detail.value!)} />
          </IonItem>
        </div>
        {searchTicker || searchFocused ? (
          <IonGrid>
            <IonItem>
              Results
            </IonItem>
            <IonRow>
              <IonCol>Symbol</IonCol>
              <IonCol>Price</IonCol>
              <IonCol>Yield</IonCol>
            </IonRow>
          </IonGrid>
        ) : (<div>
          <IonGrid>
            <IonItem>My Stocks</IonItem>
            <IonRow>
              <IonCol className="PortfolioGriItem">Symbol</IonCol>
              <IonCol className="PortfolioGriItem">Price</IonCol>
              <IonCol className="PortfolioGriItem">Shares</IonCol>
              <IonCol className="PortfolioGriItem">Yield</IonCol>
            </IonRow>
            {[0, 0, 0, 0, 0, 0, 0, 0, 0].map(() => (
              <IonRow>
                <IonCol className="PortfolioGriItem">
                  <StockSymbol ticker={faker.random.alphaNumeric(3)} />
                </IonCol>
                <IonCol className="PortfolioGriItem">${faker.finance.amount()}</IonCol>
                <IonCol className="PortfolioGriItem">{faker.random.number({ min: 1, max: 1000 })}</IonCol>
                <IonCol className="PortfolioGriItem">{faker.random.number({ min: 1, max: 100 }) / 10}%</IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </div>)}

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

export default React.memo(Portfolio);
