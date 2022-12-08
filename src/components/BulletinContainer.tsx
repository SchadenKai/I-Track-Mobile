import { IonCard, IonCardContent, IonCardHeader, IonCardTitle} from '@ionic/react';
import './BulletinContainer.css';

interface ContainerProps {
  author: string,
  post_content: string,
  img_url ?: string,
  profile_img_url : string
}

const BulletinContainer: React.FC<ContainerProps> = ({ author, post_content, img_url, profile_img_url}) => {
    return (
        <IonCard>
            <div className='user-profile-area'>
                <img src={profile_img_url}/>
            </div>
            <div className='card-content'>
                <IonCardHeader>
                    <IonCardTitle>{author}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {post_content}
                    <img src={img_url}/>
                </IonCardContent>
            </div>
            
        </IonCard>
    );
  };

export default BulletinContainer;
