import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonToolbar } from '@ionic/react'
import { useState } from 'react'
import './Login.css'

const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function loginUser() {
        console.log(email, password)
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'red-primary'}>
                <div className="container">
                    I-Track
                </div>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className='login-container'>
                    <section>
                        <img src="./assets/images/LoginPageBackDrop.png" />
                    </section>
                    <section className='login-main'>
                        <div className='login-input-wrapper'>
                        <IonItem fill='outline'>
                                <IonLabel position='stacked'>Email</IonLabel>
                                <IonInput 
                                    clearOnEdit
                                    placeholder='Email'
                                    onIonChange={(e:any) => setEmail(e.target.value)}
                                    type='email'
                                />
                            </IonItem>
                            <IonItem fill='outline'>
                                <IonLabel position='stacked'>Password</IonLabel>
                                <IonInput 
                                    placeholder='Password'
                                    onIonChange={(e:any) => setPassword(e.target.value)}
                                    type='password'
                                />
                            </IonItem>
                        </div>
                        <div className='login-button-wrapper'>
                            <IonButton expand='block' shape='round' color='red-primary' onClick={loginUser}>LOGIN</IonButton>
                        </div>
                    </section>
                    
            
                    
                </div>
                
            </IonContent>
        </IonPage>
    )
}

export default Login