<template>
  <div v-if="filteredNotes.length === 0" class="mt-10 mb-10 text-center text-[var(--color-semi-black)] dark:text-[var(--color-grey)] text-lg">
    ¡No hay notas aún! Pulsa el botón "+" para agregar tu primera nota.
  </div>
  <TransitionGroup
    v-else
    name="note-fade"
    tag="div"
    class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 mt-0 w-full max-w-6xl mx-auto justify-items-center"
  >
    <NoteCard 
      v-for="note in filteredNotes" 
      :key="note.id" 
      :note="note" 
      @showDetail="$emit('showDetail', note)"
      @delete="$emit('delete', note.id)"
      @edit="$emit('edit', note.id)"
      @toggleFavorite="$emit('toggleFavorite', note.id)"
    />
  </TransitionGroup>
</template>

<script setup>
import NoteCard from "../Cards/NoteCard.vue";
const props = defineProps({
  filteredNotes: {
    type: Array,
    default: () => []
  }
});
</script>
