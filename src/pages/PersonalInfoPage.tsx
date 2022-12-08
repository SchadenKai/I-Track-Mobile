import { IonButton, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import './PersonalInfoPage.css';

const PersonalInfoPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'red-primary'}>
                <div className="container">
                    I-Track
                </div>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen class='ion-padding'>
            
                <p>This is working </p>
            </IonContent>
        </IonPage>
    );
};


export default PersonalInfoPage;