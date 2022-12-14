import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendar, home, personCircleOutline, gridOutline, checkboxOutline, grid, checkbox, personCircle} from 'ionicons/icons';
import Todo from './pages/Todo';
import Bulletin from './pages/Bulletin';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Profile from './pages/Profile';
import PersonalInfoPage from './pages/PersonalInfoPage';

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

setupIonicReact();

interface ContainerProps {
  data: string;
}

const App: React.FC<ContainerProps> = ({data}) => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/todo">
            <Todo />
          </Route>
          <Route exact path="/bulletin">
            <Bulletin />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/profile">
            <Profile data={data}/>
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path='/personalInfo'>
            <PersonalInfoPage data={data}/>
          </Route>
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
    </IonReactRouter>
  </IonApp>
);

export default App;
