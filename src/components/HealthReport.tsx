import { IonButton, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { medkitOutline, playCircleOutline } from 'ionicons/icons';
import { useState } from 'react';
import './HomeDailyButton.css'
import ScaleCard from './ScaleCard';
import SurveyBoolean from './SurveyBoolean';


const HealthReport = ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [disable, setDisable] = useState(false);

    var loop = setInterval(() => {
        var d = new Date();
        var dh = d.getHours()
        var ds = d.getSeconds()
        // set to one day 
        if (dh == 0) {
            setDisable(false)
        }
        /*if (ds%2 == 0) {
            setDisable(false)
        }*/
        //console.log(dh)
    }, 3000)
    function cstmOnClick() {
        setIsOpen(false)
        setDisable(true)
    }

    return (
        <div className='home-daily-button'>
            <IonButton disabled={disable} expand="block" onClick={() => setIsOpen(true)} color='red-primary' className='home-daily-button'>
                <div className='home-button-layout'>
                    <IonIcon size='small' icon={medkitOutline}/>
                    <p>HEALTH REPORT</p>
                </div>
            </IonButton>

            <IonModal isOpen={isOpen} className="cstm-modal-class">
                <IonHeader>
                    <IonToolbar>
                    <IonTitle>Health Report</IonTitle>
                    </IonToolbar>
                </IonHeader>
            
                <IonContent className="ion-padding">
                    <IonList>
                        <ScaleCard question='How is your health condition?' />
                        <SurveyBoolean question='Do you have any chrontc diseases (Asthma, Diabetes, Heart Disease)?'/>    
                        <SurveyBoolean question='Do you have any CURRENT ILLNESS(cold, fever, cough, headache, etc) and have you received and/or are receiving treatrnent or medication?' />
                        <SurveyBoolean question='Have you been admitted to a hospital or medical institution/clinic this week?' />
                        <SurveyBoolean question='Do you have any injury that needs to be treated?' />
                        <IonButton color={'red-primary'} expand='block' type='submit' onClick={() => cstmOnClick()}>OK</IonButton>
                    </IonList>
                </IonContent>
            </IonModal>
        </div>
    ); 
}

export default HealthReport