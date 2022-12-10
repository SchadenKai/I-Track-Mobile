import { useIonAlert, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useRef } from 'react';
import './CustomButtonAlert.css'


interface ContainerProps {
    header_info: string,
    button_name: string,
    placeholder: string
}

const CustomButtonAlert: React.FC<ContainerProps> = ({header_info, button_name, placeholder}) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [presentAlert] = useIonAlert();
    function dismiss() {
      modal.current?.dismiss();
    }
    

    return (
        <div className='custom-button-alert'>
            <IonButton
            color='dark'
            fill='outline'
            expand='block'
            onClick={()=>
                presentAlert({
                    header: header_info,
                    buttons: ['OK'],
                    inputs: [
                      {
                        placeholder: placeholder,
                      },
                    ],
                })
                }
            >
            <div className='button-label-container'>
                <p>{placeholder}</p>
                <p>{button_name}</p>
            </div>
            </IonButton>
        </div>
        
    )
}

export default CustomButtonAlert;