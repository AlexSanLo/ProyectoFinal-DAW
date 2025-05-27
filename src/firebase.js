import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentSingleTabManager, persistentMultipleTabManager } from "firebase/firestore"; // Importamos initializeFirestore y opciones de caché

const firebaseConfig = {
  apiKey: "AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",
  authDomain: "noteeasy-7080d.firebaseapp.com",
  projectId: "noteeasy-7080d",
  storageBucket: "noteeasy-7080d.appspot.com",
  messagingSenderId: "982678504604",
  appId: "1:982678504604:web:efbc601021106951319959",
  measurementId: "G-4FHPK9T92Y",
};

const app = initializeApp(firebaseConfig);


const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
  })
});


export { db };
