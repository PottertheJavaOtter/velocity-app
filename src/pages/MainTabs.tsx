import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import {
  cashOutline,
  fileTrayFullOutline,
  homeOutline,
  calendarOutline,
} from "ionicons/icons";
import SchedulePage from "./SchedulePage";
import HomePage from "./HomePage/HomePage";
import Income from "./Income/Income";
import SessionDetail from "./SessionDetail";
import Portfolio from "./Portfolio/Portfolio";

interface MainTabsProps { }

const MainTabs: React.FC<MainTabsProps> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route
          path="/tabs/home"
          render={() => <HomePage />}
          exact={true}
        />
        <Route
          path="/tabs/schedule"
          render={() => <SchedulePage />}
          exact={true}
        />
        <Route
          path="/tabs/income"
          render={() => <Income />}
          exact={true}
        />
        <Route path="/tabs/schedule/:id" component={SessionDetail} />
        <Route
          path="/tabs/porfolio"
          render={() => <Portfolio />}
          exact={true}
        />
        <Route
          path="/tabs"
          exact={true}
        >
          <Redirect exact to="/tabs/home" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="porfolio" href="/tabs/porfolio">
          <IonIcon icon={fileTrayFullOutline} />
          <IonLabel>Porfolio</IonLabel>
        </IonTabButton>
        <IonTabButton tab="income" href="/tabs/income">
          <IonIcon icon={cashOutline} />
          <IonLabel>Income</IonLabel>
        </IonTabButton>
        <IonTabButton tab="schedule" href="/tabs/schedule">
          <IonIcon icon={calendarOutline} />
          <IonLabel>Payout Schedule</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
