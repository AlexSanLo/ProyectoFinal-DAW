<template>
  <header class="bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]">
    <section class="container mx-auto w-full px-3 py-2 flex items-center justify-between relative">
      <div class="flex items-center">
        <a href="index.html" class="ml-4">
          <img src="../../../public/assets/Logo.png" alt="Logo" class="h-16 w-auto" />
        </a>
      </div>
      <div class="font-semibold text-center">
        <h1 class="text-2xl font-bold">NoteEasy</h1>
      </div>
      <div class="flex items-center">
        <button v-if="!isLoggedIn" @click="openLoginModal" class="mr-4 bg-[var(--color-white)] px-4 py-2 rounded-md shadow-md">
          Login/Register
        </button>
        <button v-else @click="handleLogout" class="mr-4 bg-[var(--color-red)] text-[var(--color-white)] px-4 py-2 rounded-md shadow-md">
          Logout
        </button>
      </div>
    </section>
    <LoginModal :isModalOpen="isLoginModalOpen" @close="closeLoginModal" />
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import LoginModal from "../Modals/LoginModal.vue";
import useNotes from "../../composables/useNotes";

const isLoginModalOpen = ref(false);
const isLoggedIn = ref(false);
const { loadNotes, clearNotes } = useNotes();

function openLoginModal() {
  isLoginModalOpen.value = true;
}

function closeLoginModal() {
  isLoginModalOpen.value = false;
}

function handleLogout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      isLoggedIn.value = false;
      clearNotes();      // Limpia las notas al cerrar sesión
      alert("Sesión cerrada exitosamente.");
    })
    .catch((error) => {
      alert("Error al cerrar sesión: " + error.message);
    });
}

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
    if (user) {
      loadNotes();      // Carga las notas del usuario al loguear
    } else {
      clearNotes();     // Limpia las notas si no hay usuario
    }
  });
});
</script>