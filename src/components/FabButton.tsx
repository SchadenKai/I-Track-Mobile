import { IonButton, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmarkOutline, createOutline } from 'ionicons/icons';
import { useCallback, useRef, useState } from 'react';
import './FabButton.css'

interface ContainerProps {
    name ?: string;
}
  
  const FabButton: React.FC<ContainerProps> = ({ name }) => {
    const [isOpen, setIsOpen] = useState(false)
    const modal = useRef<HTMLIonModalElement>(null)
    return (
        <>
            <IonFab slot='fixed' vertical='bottom' horizontal='end'>
                <IonFabButton id='open-modal' color={'red-secondary'} onClick={() => setIsOpen(true)}>
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>

            <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]} isOpen={isOpen}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Add To Do List</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className='ion-padding'>
                    <IonItem>
                        <IonLabel>Task name</IonLabel>
                        <IonInput type='text' placeholder='Task name'></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Deadline</IonLabel>
                        <IonInput type='date' />
                    </IonItem>
                    <div className='container'>
                        <IonButton color={'dark'} fill='outline' shape='round' type='submit' onClick={() => setIsOpen(false)}>
                            <IonIcon icon={checkmarkOutline}/>
                        </IonButton>
                    </div>
                    
                </IonContent>
            </IonModal>
        </>
    );
  };
  
  export default FabButton;