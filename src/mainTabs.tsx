/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { personCircleOutline, documentTextOutline, calendar, checkbox, grid, home, personCircle } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Profile from './pages/Profile';
import Bulletin from './pages/Bulletin';
import Todo from './pages/Todo';
import Home from './pages/Home';
import PersonalInfoPage from './pages/PersonalInfoPage';


const MainTabs: React.FC = () => {
    return (
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route path="/todo" render={() => <Todo />} exact={true} />
          <Route path="/bulletin" render={() => <Bulletin />} exact={true} />
          <Route path="/home" render={() => <Home />} exact={true} />
          <Route path="/profile" render={() => <Profile />} exact={true} />
          <Route path="/personalInfo" render={() => <PersonalInfoPage />} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom" color={'red-primary'}>
          <IonTabButton tab="todo" href="/todo">
            <IonIcon icon={checkbox} />
            <IonLabel>To do</IonLabel>
          </IonTabButton>
          <IonTabButton tab="bulletin" href="/bulletin">
            <IonIcon icon={grid} />
            <IonLabel>Bulletin</IonLabel>
          </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calendar" href="/calendar">
            <IonIcon icon={calendar} />
            <IonLabel>Calendar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personCircle} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    );
  };
  
  export default MainTabs;

