import { IonContent, IonHeader, IonPage , IonToolbar } from '@ionic/react';
import { checkmarkCircleOutline, medkitOutline, playCircleOutline, receiptOutline } from 'ionicons/icons';
import BulletinContainer from '../components/BulletinContainer';
import CheckInButton from '../components/CheckInButton';
import HealthReport from '../components/HealthReport';
import HomeDailyButton from '../components/HomeDailyButton';
import OutputBtn from '../components/OutputBtn';
import SelfReport from '../components/SelfReport';
import SubjectScheduleCard from '../components/SubjectScheduleCard';
import ToDoItems from '../components/ToDoItems';
import './Home.css';

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
      <h5>Schedule for today</h5>
        <div className='container'>
          <SubjectScheduleCard subject_name='Mobile Computing' time_start='7:00am' time_end='10:00am'/>
          <SubjectScheduleCard subject_name='Application Development' time_start='10:00am' time_end='1:00pm'/>
          <SubjectScheduleCard subject_name='Data Analysis' time_start='1:00pm' time_end='4:00pm'/>
        </div>
        <h5>Tasks for today</h5>
        <div className='container'>
          <ToDoItems item_content={'Assignment #1'} />
          <ToDoItems item_content={'Project #3'} />
          <ToDoItems item_content={'Quiz in Science'} />
          <ToDoItems item_content={'Assignment #2'} />
        </div>
        <h5>Daily Tasks</h5>
        <div className='daily-container'>
          <CheckInButton button_name='CHECK IN' button_icon={checkmarkCircleOutline}/>
          <OutputBtn />
          <SelfReport />
          <HealthReport />
        </div>
        <h5>Latest Updates</h5>
        <div className='container margin-top-1'>
          <BulletinContainer author='Kairus E. Tecson'
            post_content='Picture of Batangas State University'
            img_url='https://ionicframework.com/docs/img/demos/card-media.png'
            profile_img_url='https://ionicframework.com/docs/img/demos/avatar.svg'
          />
          <BulletinContainer author='Darren Malibiran'
            post_content='This is an update today currently at BSU - Alangilan'
            profile_img_url='https://ionicframework.com/docs/img/demos/avatar.svg'
          />
          <BulletinContainer author='Dominic Valdez'
            post_content='Presentation for Math topic'
            profile_img_url='https://ionicframework.com/docs/img/demos/avatar.svg'
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
