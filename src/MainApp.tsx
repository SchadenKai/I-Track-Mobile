/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonApp, IonButton, IonContent, IonInput, IonItem, IonPage } from '@ionic/react';
import App from './App';
import { useDeferredValue, useState } from 'react';
import './pages/Login.css'
import axios from 'axios'

const MainApp: React.FC = () => {
  // authorization key state management 
  const [isAuthorized, setIsAuthorized] = useState(() => {
    return false
  })
  // email and password state management 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // base URL
  const api = axios.create({
    baseURL: 'http://localhost:8000/api'
  })

  const [passData, setPassData] = useState('')

  function validateUser(data:string) {
    if (data == "success"){
      setIsAuthorized(true)
    } 
  }

  function loginUser() {
    let userReqObj = {
      email: email,
      password: password
    }
    let userReqString = JSON.stringify(userReqObj)

    api.post('/student.php', userReqString)
    .then((res) => {
      validateUser(res.data.message)
      setPassData(JSON.stringify(res))
      console.log(res);
      console.log(passData);
      
      
    })
    .catch((error) => {
      console.log(error)
    })  
  }


  if (isAuthorized == true) {
    return (
      <App data={passData}/>
    )
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
                  <div className='container'><h1>Log in to continue.</h1></div>
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

export default MainApp;

