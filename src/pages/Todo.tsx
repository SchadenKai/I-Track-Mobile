import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Todo.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
          <IonToolbar>
            <div className="container">
              I-Track
            </div>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
