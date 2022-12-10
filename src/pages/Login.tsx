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
            <IonContent>
                <div className='login-container'>
                    <div></div>
                    <section className='position-relative login-bg'>
                        <img className='container' src='./assets/icon/ITrackMobileCircle.png' alt='icon'/>
                    </section>
                    <section className='login-main'>
                        <div className='login-input-wrapper'>
                        <IonItem fill='outline'>
                                <IonLabel position='floating'>Email</IonLabel>
                                <IonInput 
                                    clearOnEdit
                                    placeholder='Email'
                                    onIonChange={(e:any) => setEmail(e.target.value)}
                                    type='email'
                                />
                            </IonItem>
                            <IonItem fill='outline'>
                                <IonLabel position='floating'>Password</IonLabel>
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