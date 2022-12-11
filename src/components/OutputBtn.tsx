import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { receiptOutline } from 'ionicons/icons';
import { useState } from 'react';
import './HomeDailyButton.css';

interface ContainerProps {
   
}

const OutputBtn: React.FC<ContainerProps> = ({  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='home-daily-button'>
            <IonButton expand="block" onClick={() => setIsOpen(true)} color='red-primary' className='home-daily-button'>
                <div className='home-button-layout'>
                    <IonIcon size='small' icon={receiptOutline}/>
                    <p>OUTPUT</p>
                </div>
            </IonButton>

            <IonModal isOpen={isOpen} className="cstm-modal-class">
                <IonHeader>
                    <IonToolbar>
                    <IonTitle>Output</IonTitle>
                    <IonButtons slot="end" >
                        <IonButton color={'red-secondary'} onClick={() => setIsOpen(false)}>Close</IonButton>
                    </IonButtons>
                    </IonToolbar>
                </IonHeader>


                <IonContent className="ion-padding">
                    <IonList className='output-btn'>
                        <IonItem>
                            <IonLabel>Raw Score</IonLabel>
                            <IonInput type='number' />
                        </IonItem>
                        <IonItem>
                            <IonLabel>Overall Score</IonLabel>
                            <IonInput type='number' />
                        </IonItem>
                        <IonItem>
                            <IonLabel>Output type</IonLabel>
                            <IonSelect placeholder='Select Output Type'>
                                <IonSelectOption value="Project">Project</IonSelectOption>
                                <IonSelectOption value="Assignment">Assignment</IonSelectOption>
                                <IonSelectOption value="Quiz">Quiz</IonSelectOption>
                                <IonSelectOption value="Exam">Exam</IonSelectOption>
                                <IonSelectOption value="Thesis / Research">Thesis / Research</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonButton color={'red-primary'} expand='block' type='submit' onClick={() => setIsOpen(false)}>OK</IonButton>
                    </IonList>
                </IonContent>
            </IonModal>
        </div>
    );    
};

export default OutputBtn;
