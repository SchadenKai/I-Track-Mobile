import { IonAvatar, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import './HomeDailyButton.css';
  
interface ContainerProps {
  button_name: string,
  button_icon: string
  button_functionality ?: Function
}


const HomeDailyButton: React.FC<ContainerProps> = ({button_name, button_icon, button_functionality}) => {
  const [isOpen, setIsOpen] = useState(false);
  


  return (
    <div className='home-daily-button'>
      <IonButton expand="block" onClick={() => setIsOpen(true)} color='red-primary' className='home-daily-button'>
        <div className='home-button-layout'>
          <IonIcon size='small' icon={button_icon}/>
          <p>{button_name}</p>
        </div>
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
