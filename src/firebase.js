import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA8EmogduR2W8d9ht3q4VyM4J-JUTvwBd8",
  authDomain: "noteeasy-7080d.firebaseapp.com",
  projectId: "noteeasy-7080d",
  storageBucket: "noteeasy-7080d.firebasestorage.app",
  messagingSenderId: "982678504604",
  appId: "1:982678504604:web:efbc601021106951319959",
  measurementId: "G-4FHPK9T92Y",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta la instancia de Firestore
export { db };