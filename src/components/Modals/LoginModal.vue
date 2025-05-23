<template>
    <div
      v-if="props.isModalOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @keydown.esc="closeModal"
      tabindex="0"
      ref="modalContainer"
    >
      <div class="bg-white dark:bg-[var(--color-grey)] p-6 rounded-lg shadow-lg w-96 relative">
        <button @click="closeModal" class="absolute top-2 right-2 text-xl font-bold">&times;</button>
  
        <h2 class="text-xl font-semibold text-center mb-4">Login / Register</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              v-model="password"
              class="w-full mt-1 p-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div class="flex justify-between">
            <button type="button" @click="handleSignUp" class="px-4 py-2 bg-green-500 text-white rounded-md">
              Register
            </button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import useNotes from "../../composables/useNotes";
  
  const props = defineProps({
    isModalOpen: Boolean,
  });
  
  const emit = defineEmits(["close"]);
  
  const email = ref("");
  const password = ref("");
  const modalContainer = ref(null);
  const { login, loadNotes } = useNotes();
  
  async function handleLogin() {
    try {
      await login(email.value, password.value);
      await loadNotes(); // Carga las notas tras login
      emit("close");
    } catch (error) {
      alert("Error: " + error.message);
    }
  }
  
  function handleSignUp() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        closeModal();
      })
      .catch((error) => {
        alert("Error de registro: " + error.message);
      });
  }
  
  function closeModal() {
    emit("close");
  }
  
  watch(
    () => props.isModalOpen,
    (newVal) => {
      if (newVal) {
        document.addEventListener("keydown", handleEscape);
        modalContainer.value?.focus();
      } else {
        document.removeEventListener("keydown", handleEscape);
      }
    }
  );
  
  function handleEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
  </script>
