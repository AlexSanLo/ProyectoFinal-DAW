import { ref } from "vue";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function useNotes() {
  const notes = ref([]);
  const auth = getAuth();
  const user = ref(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser;
    if (user.value) {
      loadNotes();
    } else {
      notes.value = [];
    }
  });

  async function loadNotes() {
    try {
      if (!user.value) {
        notes.value = [];
        return;
      }
      const q = query(collection(db, "notes"), where("uid", "==", user.value.uid));
      const querySnapshot = await getDocs(q);
      notes.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        favorita: doc.data().favorita ?? false, // Asegura que siempre exista el campo favorita
      }));
      console.log("Notas cargadas:", notes.value);
    } catch (error) {
      console.error("Error al cargar notas:", error.message);
    }
  }

  async function addNote(note) {
    try {
      if (!user.value) throw new Error("Para crear notas debes estar registrado/logueado");
      const noteWithUid = { ...note, uid: user.value.uid, favorita: note.favorita ?? false };
      const docRef = await addDoc(collection(db, "notes"), noteWithUid);
      notes.value.push({ id: docRef.id, ...noteWithUid });
    } catch (error) {
      alert(error.message); 
      throw error;
    }
  }

  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      await loadNotes();
      return userCredential.user;
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      throw error; 
    }
  }

  async function updateNote(note, id) {
    try {
      await updateDoc(doc(db, "notes", id), note);
      notes.value = notes.value.map((n) => (n.id === id ? { id, ...note } : n));
    } catch (error) {
      console.error("Error al actualizar nota:", error.message);
    }
  }

  async function deleteNote(id) {
    try {
      await deleteDoc(doc(db, "notes", id));
      notes.value = notes.value.filter((n) => n.id !== id);
    } catch (error) {
      console.error("Error al eliminar nota:", error.message);
    }
  }

  function clearNotes() {
    notes.value = [];
  }

  return { notes, loadNotes, addNote, login, updateNote, deleteNote, clearNotes };
}
