import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import BulletinContainer from '../components/BulletinContainer';
import './Bulletin.css';

const Tab2: React.FC = () => {
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
      
        <BulletinContainer author='Kairus Noah E. Tecson'
          post_content='Picture of Batangas State University'
          img_url='https://ionicframework.com/docs/img/demos/card-media.png'
          profile_img_url='https://ionicframework.com/docs/img/demos/avatar.svg' />
        <BulletinContainer author='Darren Malibiran' 
          post_content='The quick brown fox jumps over the lazy dog' 
          profile_img_url='https://ionicframework.com/docs/img/demos/avatar.svg'/>
        <BulletinContainer author='Zyrah Militante' 
          post_content='Presentation in Data Analaysis' 
          profile_img_url='https://ionicframework.com/docs/img/demos/avatar.svg'/>

      </IonContent>
    </IonPage>

  );
};

export default Tab2;