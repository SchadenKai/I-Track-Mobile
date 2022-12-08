import { IonContent, IonHeader, IonPage , IonToolbar } from '@ionic/react';
import ToDoItems from '../components/ToDoItems';
import './Todo.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'red-primary'}>
          <div className="container">
            I-Track
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div>
          <h1>This Week</h1>
          <ToDoItems item_content='Assignment #1'/>
          <ToDoItems item_content='Project #3'/>
          <ToDoItems item_content='Quiz in Science'/>
          <ToDoItems item_content='Assignment #2'/>
        </div>
        <div>        
          <h1>Today</h1>
          <ToDoItems item_content='Assignment #1'/>
          <ToDoItems item_content='Project #3'/>
          <ToDoItems item_content='Quiz in Science'/>
          <ToDoItems item_content='Assignment #2'/>
        </div>
        <div>
          <h1>This Month</h1>
          <ToDoItems item_content='Assignment #1'/>
          <ToDoItems item_content='Project #3'/>
          <ToDoItems item_content='Quiz in Science'/>
          <ToDoItems item_content='Assignment #2'/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;