import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Configuración de tu aplicación Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyAUlZzBFSW4FqTNY-kvYoHylCytEkuT07U',
  authDomain: 'arritmo-personal.firebaseapp.com',
  projectId: 'arritmo-personal',
  storageBucket: 'arritmo-personal.appspot.com',
  messagingSenderId: '801394385555',
  appId: '1:801394385555:web:2ffbcd33fce376451e2366',
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

// Exportar la configuración de Firebase
const db = getFirestore(app);
export { auth, db }