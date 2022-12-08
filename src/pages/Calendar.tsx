import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CalendarInterface from '../components/CalendarInterface';
import ExploreContainer from '../components/ExploreContainer';
import SubjectScheduleCard from '../components/SubjectScheduleCard';
import './Calendar.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'red-primary'}>
          <div className="container">
            I-Track
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <div className='container'>
          <CalendarInterface/>
        </div>
        <h3 className='label'>Schedule for today</h3>
        <div className='schedule-container'>
          <SubjectScheduleCard subject_name='Mobile Computing' time_start='7:00am' time_end='10:00am'/>
          <SubjectScheduleCard subject_name='Application Development' time_start='10:00am' time_end='1:00pm'/>
          <SubjectScheduleCard subject_name='Data Analysis' time_start='1:00pm' time_end='4:00pm'/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
