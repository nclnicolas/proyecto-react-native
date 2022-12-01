import { initializeApp } from 'firebase/app'; 
import  Constants  from 'expo-constants';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWyT2pWZuIgi6mgMh4I3eDC4l4RhJ-2ps",
  authDomain: "proyecto-react-native-b9a57.firebaseapp.com",
  projectId: "proyecto-react-native-b9a57",
  storageBucket: "proyecto-react-native-b9a57.appspot.com",
  messagingSenderId: "79055659509",
  appId: "1:79055659509:web:6db7927cd063e6ef9e40bc"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  export const database = getFirestore();