import { IonButton, IonIcon } from '@ionic/react';
import { filterOutline } from 'ionicons/icons';
import './AppButton.css'

interface ContainerProps {
    button_name: string;
}
  
  const AppButton: React.FC<ContainerProps> = ({ button_name }) => {
    return (
        <div className='cstm-filter-button'>
            <IonButton shape='round' fill='outline'>
                <IonIcon slot='start' icon={filterOutline} color='dark'></IonIcon>
                {button_name}
            </IonButton>
        </div>
      
    );
  };
  
  export default AppButton;
  