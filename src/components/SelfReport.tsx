import { IonButton, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonList, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { playCircleOutline } from 'ionicons/icons';
import { useState } from 'react';
import './HomeDailyButton.css'
import ScaleCard from './ScaleCard';
import SurveyBoolean from './SurveyBoolean';


const SelfReport = ({}) => {
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
                    <IonIcon size='small' icon={playCircleOutline}/>
                    <p>SELF REPORT</p>
                </div>
            </IonButton>

            <IonModal isOpen={isOpen} className="cstm-modal-class">
                <IonHeader>
                    <IonToolbar>
                    <IonTitle>Self Report</IonTitle>
                    </IonToolbar>
                </IonHeader>
            
                <IonContent className="ion-padding">
                    <IonList>
                        <ScaleCard question='How was your day?' />
                        <SurveyBoolean question='Did you finish your task on time?'/>    
                        <SurveyBoolean question='Feeling tired and/or having a little energy?' />
                        <SurveyBoolean question='Trouble falling asleep?' />
                        <IonButton color={'red-primary'} expand='block' type='submit' onClick={() => cstmOnClick()}>OK</IonButton>
                    </IonList>
                </IonContent>
            </IonModal>
        </div>
    ); 
}

export default SelfReport