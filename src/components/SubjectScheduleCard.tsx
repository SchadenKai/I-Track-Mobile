import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import { timeOutline } from 'ionicons/icons'
import './SubjectScheduleCard.css';

interface ContainerProps {
    subject_name: string,
    time_start: string,
    time_end: string
  }
  
  const SubjectScheduleCard: React.FC<ContainerProps> = ({ subject_name, time_start, time_end}) => {
    return (
        <IonCard>
            <IonCardContent>
                <IonCardTitle>{subject_name}</IonCardTitle>
                <p><IonIcon icon={timeOutline}/> {time_start} - {time_end}</p>
            </IonCardContent>
        </IonCard>
    );
  };
  
  export default SubjectScheduleCard;