import { IonButton, IonIcon } from '@ionic/react';
import { useState } from 'react';
import './CheckInButton.css';

interface ContainerProps {
    button_name: string,
    button_icon: string
  }
  
  const CheckInButton: React.FC<ContainerProps> = ({button_name, button_icon}) => {
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
        
        var cp = 16
    }, 3000)
   
    

    return (
    <div className='home-daily-button'>
        <IonButton disabled={disable} expand="block" onClick={() => setDisable(true)} color='red-primary' className='home-daily-button'>
        <div className='home-button-layout'>
            <IonIcon size='small' icon={button_icon}/>
            <p>{button_name}</p>
        </div>
        </IonButton>
    </div>
    )
};

export default CheckInButton;
