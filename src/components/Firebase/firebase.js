import 'firebase/compat/auth';
import app from 'firebase/compat/app';

const config = {
    apiKey: "AIzaSyBpqJMx_pV1LUUurvloKGSoypxuRwx7u30",
    authDomain: "marvel-quiz-73e58.firebaseapp.com",
    projectId: "marvel-quiz-73e58",
    storageBucket: "marvel-quiz-73e58.appspot.com",
    messagingSenderId: "557843584601",
    appId: "1:557843584601:web:9e6b362cc1bbd0468e4348"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    //inscription
    signupUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);


    //connexion
    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    //disconnect
    signoutUser = () => this.auth.signOut();

    //resetPassword
    // passwordReset = (email) => {
    //     this.auth.sendPasswordResetEmail(email);
    //     this.auth.useDeviceLanguage();
    // }
    passwordReset = email => 
        this.auth.sendPasswordResetEmail(email);

    //Langue de l'email en fonction du navigateur
    lang = () => this.auth.useDeviceLanguage();

}

export default Firebase;