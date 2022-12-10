import React, { useRef } from 'react';
import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import './Profile.css';
import './PersonalInfoPage.tsx'
import AppButton from '../components/AppButton';

const Tab3: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'red-primary'}>
          <div className="container">
            I-Track
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonButton expand='block' color={'light'} routerLink="/personalInfo" className='profile-button'>
          <div className='profile-button'>
            <IonIcon icon={personCircle}/>
            <div className='user-info'>
              <p>Kairus Noah E. Tecson</p>
              <p>20-07496</p>
            </div>
          </div>
        </IonButton>
        <h4>General Weighted Average</h4>

        <AppButton button_name='Filter Options'/>

        <IonCard className='graph-card-container'>
          <IonCardContent></IonCardContent>
        </IonCard>
        
        <AppButton button_name='Filter Options'/>

        <IonCard className='graph-card-container'>
          <IonCardContent></IonCardContent>
        </IonCard>

        <IonCard className='graph-card-container'>
          <IonCardContent></IonCardContent>
        </IonCard>

        <AppButton button_name='Filter Options'/>

        <IonCard className='graph-card-container'>
          <IonCardContent></IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
