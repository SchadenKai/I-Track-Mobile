import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, createOutline } from 'ionicons/icons';
import './FabButton.css'

interface ContainerProps {
    name ?: string;
}
  
  const FabButton: React.FC<ContainerProps> = ({ name }) => {
    return (
        <IonFab slot='fixed' vertical='bottom' horizontal='end'>
            <IonFabButton color={'red-secondary'}>
                <IonIcon icon={add}></IonIcon>
            </IonFabButton>

            <IonFabList side='top'>
                <IonFabButton>
                    <IonIcon icon={createOutline} />
                </IonFabButton>
            </IonFabList>
        </IonFab>
    );
  };
  
  export default FabButton;