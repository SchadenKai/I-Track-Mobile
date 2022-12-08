import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';
import './ToDoItems.css';

enum timeClassificationEnum {
    week,
    month,
    today
}

interface ContainerProps {
  item_content: string,
  date_classification ?: timeClassificationEnum,
}

const ToDoItems: React.FC<ContainerProps> = ({ item_content }) => {
  return (
    <IonItem>
        <IonCheckbox slot="start" color={'dark'}></IonCheckbox>
        <IonLabel>{item_content}</IonLabel>
    </IonItem>
  );
};

export default ToDoItems;
