import { IonBackButton, IonButton, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import CustomButtonAlert from '../components/CustomButtonAlert';
import {chevronBackOutline} from 'ionicons/icons'
import SampleComp from '../components/SampleComp';
import './PersonalInfoPage.css';

interface ContainerProps {
    data: string
  }
  

const PersonalInfoPage: React.FC<ContainerProps> = ({data}) => {
    const passedData = JSON.parse(data)
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'red-primary'}>
                <div className="toolbar-container">
                    <IonButton slot='start' color={'transparent'}>
                        <IonBackButton color={'light'} defaultHref='profile' icon={chevronBackOutline}/>
                    </IonButton>
                    I-Track
                </div>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen class='ion-padding'>
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.name}
                    placeholder='Name'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.sr_code}
                    placeholder='Student ID'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.birthdate}
                    placeholder='Birthdate'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.gender}
                    placeholder='Gender'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.civil_status}
                    placeholder='Civil Status'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.scholar}
                    placeholder='Scholarship'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.working_student}
                    placeholder='Additional Work'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.activities}
                    placeholder='Activities'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.transportation}
                    placeholder='Transportation'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.accomodation}
                    placeholder='Accomodation'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.characteristics}
                    placeholder='Characteristics'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.interest}
                    placeholder='Interests'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='Computer Science'
                    placeholder='Course'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.year_started}
                    placeholder='Year Started'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.year_level}
                    placeholder='Year Level'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.target_gwa}
                    placeholder='Target GWA'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.attended_seminars}
                    placeholder='Attended Seminars'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name={passedData.data.learning_style}
                    placeholder='Learning Styles'
                />
            </IonContent>
        </IonPage>
    );
};


export default PersonalInfoPage;