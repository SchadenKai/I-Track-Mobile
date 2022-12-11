import { useIonAlert, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { text } from 'ionicons/icons';
import { useRef, useState } from 'react';
import './CustomButtonAlert.css'


interface ContainerProps {
    header_info: string,
    placeholder: string,
    button_name : string
}


const CustomButtonAlert: React.FC<ContainerProps> = ({header_info, button_name, placeholder}) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [presentAlert] = useIonAlert();
    function dismiss() {
      modal.current?.dismiss();
    }
    const [buttonNameState, setState] = useState(button_name)

    return (
        <div className='custom-button-alert'>
            <IonButton
            color='dark'
            fill='outline'
            expand='block'
            onClick={()=>
                presentAlert({
                    header: header_info,
                    buttons: [{
                        text: 'OK',
                        handler: (inputData) => {
                            button_name = inputData[0]
                            setState(button_name)
                        }
                    }],
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
                <p>{buttonNameState}</p>
            </div>
            </IonButton>
        </div>
        
    )
}

export default CustomButtonAlert;