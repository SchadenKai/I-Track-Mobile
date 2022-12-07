import React, { useRef } from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Tab3: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);

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
        <IonButton id="Name" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Inputt Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Student Id" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Student ID.</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>


      <IonContent class="ion-padding">
        <IonButton id="Name" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Input Age</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>



      <IonContent class="ion-padding">
        <IonButton id="Gender" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>



      <IonContent class="ion-padding">
        <IonButton id="Civil Status" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Scholarship" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Additional Work" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Activities" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Transportation" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Accomodation" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Characteristics" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Interest" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Course" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Year Started" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

      <IonContent class="ion-padding">
        <IonButton id="Year Level" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>


      <IonContent class="ion-padding">
        <IonButton id="Target GWA" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>


      <IonContent class="ion-padding">
        <IonButton id="Attended Seminars" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>


      <IonContent class="ion-padding">
        <IonButton id="Learning Style" expand="block">
          Open Custom Dialog
        </IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-custom-dialog">
          <div className="wrapper">
            <h2>Dialog header</h2>
        
            <IonList lines="none">
              <IonItem button={true} detail={false} onClick={dismiss}>
                <IonIcon icon={personCircle}></IonIcon>
                <IonLabel>Insert Name</IonLabel>
              </IonItem>
            </IonList>
          </div>
        </IonModal>
      </IonContent>

    </IonPage>
  );
};

export default Tab3;
