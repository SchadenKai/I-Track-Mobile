import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import './HomeDailyButton.css';
  

function HomeDailyButton() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <IonButton expand="block" onClick={() => setIsOpen(true)} color='red-primary' className='home-daily-button'>
        Open
        </IonButton>
        <IonModal isOpen={isOpen} className="cstm-modal-class">
            <IonHeader>
                <IonToolbar>
                <IonTitle>Modal</IonTitle>
                <IonButtons slot="end" >
                    <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
                reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
                Eaque, dicta.
                </p>
            </IonContent>
        </IonModal>
      </div>
    );
  }

export default HomeDailyButton;
