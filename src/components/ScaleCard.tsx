import { IonCard, IonCardContent, IonCardHeader } from '@ionic/react';
import './HomeDailyButton.css'


interface ContainerProps {
    question: string;
  }
  
  const ScaleCard: React.FC<ContainerProps> = ({ question}) => {
    return (
        <IonCard>
            <div className='scale-card-content'>
                <IonCardHeader>
                    {question}
                </IonCardHeader>
                <IonCardContent>
                    <div className='scale-button-container'>
                        <img src="./assets/icon/verybadIcon.png"/>
                        <img src="./assets/icon/badIcon.png"/>
                        <img src="./assets/icon/normalIcon.png"/>
                        <img src="./assets/icon/goodIcon.png"/>
                        <img src="./assets/icon/verygoodIcon.png"/>
                    </div>
                </IonCardContent>
            </div>
        </IonCard>
    );
  };
  
  export default ScaleCard;