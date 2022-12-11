import { IonBackButton, IonButton, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react';
import CustomButtonAlert from '../components/CustomButtonAlert';
import {chevronBackOutline} from 'ionicons/icons'
import SampleComp from '../components/SampleComp';
import './PersonalInfoPage.css';

const PersonalInfoPage: React.FC = () => {
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
                    button_name='Zyrah Militante'
                    placeholder='Name'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='20-00139'
                    placeholder='Student ID'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='20'
                    placeholder='Age'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='Female'
                    placeholder='Gender'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='Single'
                    placeholder='Civil Status'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='Yes'
                    placeholder='Scholarship'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='Yes'
                    placeholder='Additional Work'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='Yes'
                    placeholder='Activities'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='Other'
                    placeholder='Transportation'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='With Family'
                    placeholder='Accommodation'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='See more'
                    placeholder='Characteristics'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='Programming'
                    placeholder='Interests'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='See more'
                    placeholder='Course'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='2020'
                    placeholder='Year Started'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='Third Year'
                    placeholder='Year Level'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='1.00'
                    placeholder='Target GWA'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='7'
                    placeholder='Attended Seminars'
                />
                <CustomButtonAlert 
                    header_info='Please enter your info'
                    button_name='See more'
                    placeholder='Learning Styles'
                />
            </IonContent>
        </IonPage>
    );
};


export default PersonalInfoPage;