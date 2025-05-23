<template>
  <section>
    <button
      @click="closeModal"
      class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md"
    >
      Volver
    </button>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close"); // Emite evento para cerrar la modal
};
</script>
