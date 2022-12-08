import { IonCheckbox, IonContent, IonHeader, IonItem, IonLabel, IonPage , IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Todo.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'red-primary'}>
          <div className="container">
            I-Track
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div>
          <h1>This Week</h1>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Assignment #1</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Project #3</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Quiz in Science</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>assignment #2</IonLabel>
          </IonItem>
        </div>
        <div>        
          <h1>Today</h1>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Assignment #1</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Project #3</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Quiz in Science</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>assignment #2</IonLabel>
          </IonItem>
        </div>
        <div>
          <h1>This Month</h1>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Assignment #1</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Project #3</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>Quiz in Science</IonLabel>
          </IonItem>
          <IonItem>
            <IonCheckbox slot="start"></IonCheckbox>
            <IonLabel>assignment #2</IonLabel>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;