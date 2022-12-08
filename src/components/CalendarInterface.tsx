import { IonDatetime } from '@ionic/react';
import { useEffect, useRef } from 'react';
import './CalendarInterface.css';

interface ContainerProps {
  name ?: string;
}



const CalendarInterface: React.FC<ContainerProps> = ({ name }) => {
    const datetime = useRef<null | HTMLIonDatetimeElement>(null);
    useEffect(() => {
        if(!datetime.current) return;
    }, []);
  return (
    <IonDatetime 
        ref={datetime}
        presentation="date"
        multiple={true}
        color='red-tertiary'
        className='cstm-calendar-layout'
    ></IonDatetime>
  );
};

export default CalendarInterface;
