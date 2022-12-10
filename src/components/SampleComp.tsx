
import { useIonAlert, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useRef } from 'react';
import './SampleComp.css'

function SampleComp() {
    const modal = useRef<HTMLIonModalElement>(null);
    const [presentAlert] = useIonAlert();
    function dismiss() {
      modal.current?.dismiss();
    }
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>I-Track</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                placeholder: 'Name',
              },
            ],
          })
        }
      >
        Name
      </IonButton>
  
      <IonButton
        expand='block'
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                placeholder: 'enter SrCode Id (max 8 characters)',
                attributes: {maxlength: 8,},
              },
            ],
          })
        }
      >
        Student ID
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'number',
                placeholder: 'Age',
                min: 1,
                max: 100,
              },
            ],
          })
        }
      >
        Age
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'GENDER',
              },
            ],
          })
        }
      >
        Gender
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'Status',
              },
            ],
          })
        }
      >
        Civil Status
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'did you have Scholarship',
              },
            ],
          })
        }
      >
        Scholarship 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'N/A if not',
              },
            ],
          })
        }
      >
        Additional work 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'N/A if not',
              },
            ],
          })
        }
      >
        Activities 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'Type of vihicle',
              },
            ],
          })
        }
      >
        Transportation 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'Type of accomodation',
              },
            ],
          })
        }
      >
        Accomodation 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'enter info',
              },
            ],
          })
        }
      >
        characteristics 
      </IonButton>
  
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'enter info',
              },
            ],
          })
        }
      >
        Interest 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'enter Course',
              },
            ],
          })
        }
      >
        Course 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'number',
                placeholder: 'Age',
                min: 1,
                max: 100,
              },
            ],
          })
        }
      >
        Year Started 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'enter year level',
              },
            ],
          })
        }
      >
        Year Level 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'number',
                placeholder: 'Age',
                min: 1,
                max: 100,
              },
            ],
          })
        }
      >
        Target GWA 
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'number',
                placeholder: 'Age',
                min: 1,
                max: 100,
              },
            ],
          })
        }
      >
        attended seminars  
      </IonButton>
  
      <IonButton
        onClick={() =>
          presentAlert({
            header: 'Please enter your info',
            buttons: ['OK'],
            inputs: [
              {
                type: 'textarea',
                placeholder: 'enter information',
              },
            ],
          })
        }
      >
        learning style 
      </IonButton>
        </IonContent>
      </IonPage>
    );
  }
  
  export default SampleComp;