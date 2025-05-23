<template>
  <div
    class="flex items-center p-4 rounded-lg shadow-md
      w-[98vw] max-w-sm md:max-w-md
      min-h-[180px] md:min-h-[200px] relative mx-auto mb-8
      bg-[var(--color-white)] dark:bg-[var(--color-grey)]"
  >
    <div :class="priorityClass" class="w-4 h-full rounded-l-lg"></div>

    <!-- Estrella de favorito arriba a la derecha -->
    <button
      @click="$emit('toggleFavorite')"
      class="absolute top-3 right-3 z-10"
      :aria-label="note.favorita ? 'Quitar de favoritos' : 'Marcar como favorita'"
    >
      <svg
        v-if="note.favorita"
        xmlns="http://www.w3.org/2000/svg"
        class="w-7 h-7 md:w-8 md:h-8 text-yellow-400 drop-shadow"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"/>
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="w-7 h-7 md:w-8 md:h-8 text-gray-400 hover:text-yellow-400 transition"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"/>
      </svg>
    </button>

    <div class="flex flex-col flex-grow ml-6 h-full justify-between">
      <h3 class="text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0">{{ note.title }}</h3>
      <p class="text-lg text-[var(--color-black)] dark:text-[var(--color-black)] mt-2">{{ note.description }}</p>

      <div class="flex flex-col mt-auto">
        <p class="text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]">{{ note.etiquetas }}</p>
        <p class="text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]">{{ formatDate(note.timestamp) }}</p>
      </div>
    </div>

    <div class="absolute bottom-3 right-3 flex gap-2">
      <button @click="$emit('edit')" class="px-3 py-2 rounded-md text-sm hover:opacity-90
        bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]">
        Editar
      </button>
      <button @click="$emit('delete')" class="px-3 py-2 rounded-md text-sm hover:opacity-90
        bg-[var(--color-red)] text-[var(--color-white)]">
        Eliminar
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { formatDate } from "../../composables/useDate"; 

const props = defineProps({
  note: Object,
});

const emit = defineEmits(["delete", "edit", "toggleFavorite"]);

const priorityClass = computed(() => {
  switch (props.note.priority) {
    case "Alta":
      return "bg-[var(--color-red)]";
    case "Media":
      return "bg-[var(--color-yellow)]";
    case "Baja":
      return "bg-[var(--color-blue-medium)]";
    default:
      return "bg-[var(--color-semi-black)]";
  }
});
</script>
