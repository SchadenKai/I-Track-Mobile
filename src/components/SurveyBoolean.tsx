import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { heartDislikeOutline, heartOutline, thumbsDownOutline, thumbsUpOutline } from 'ionicons/icons';
import './SurveyBoolean.css';

interface ContainerProps {
  question: string;
}

const SurveyBoolean: React.FC<ContainerProps> = ({ question }) => {
  return (
    <IonCard>
        <div className='user-profile-area'>
            <img src="./assets/icon/ITrackMobileCircle.png"/>
        </div>
        <div className='card-content'>
            <IonCardHeader>
                <IonCardTitle>I-Track</IonCardTitle>
            </IonCardHeader>
            <IonCardContent className='survey-card'>
                {question}
            </IonCardContent>
            <div className='answer-btns-row'>
                <IonButton color={'dark'} fill='clear'>
                    <IonIcon icon={heartDislikeOutline}/>
                    No
                </IonButton>
                <IonButton color={'dark'} fill='clear'>
                    <IonIcon icon={heartOutline}/>
                    Yes
                </IonButton>
            </div>
        </div>
        
    </IonCard>
  );
};

export default SurveyBoolean;
