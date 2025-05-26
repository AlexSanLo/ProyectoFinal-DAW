<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
    @mousedown.self="closeModal"
  >
    <div
      class="flex flex-col p-4 rounded-lg shadow-md
        w-[98vw] max-w-sm md:max-w-md
        min-h-[180px] md:min-h-[200px] relative mx-auto mb-8
        bg-[var(--color-white)] dark:bg-[var(--color-grey)]
        overflow-hidden"
      ref="modalRef"
    >
      <div :class="priorityClass" class="absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full"></div>

      <div class="flex flex-col flex-grow ml-6 h-full justify-between relative z-10">
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-xl font-bold z-20 text-[var(--color-black)] dark:text-[var(--color-white)]"
        >&times;</button>
        <h3 class="text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0">{{ note.title }}</h3>
        <p
          class="mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words break-all overflow-y-auto max-h-32 md:max-h-56 pr-2"
          style="scrollbar-gutter: stable;"
        >
          {{ note.description }}
        </p>
        <div class="flex flex-col mt-auto">
          <p class="text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]">{{ note.etiquetas }}</p>
          <p class="text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]">{{ formatDate(note.timestamp) }}</p>
        </div>
      </div>

      <div class="absolute bottom-3 right-3 flex gap-2 z-20">
        <button @click.stop="handleEdit" class="px-3 py-2 rounded-md text-sm hover:opacity-90
          bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]">
          Editar
        </button>
        <button @click.stop="handleDelete" class="px-3 py-2 rounded-md text-sm hover:opacity-90
          bg-[var(--color-red)] text-[var(--color-white)]">
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { formatDate } from '../../composables/useDate'
const props = defineProps({ note: Object });
const emit = defineEmits(['close', 'edit', 'delete']);

const modalRef = ref(null);

const closeModal = () => emit('close');

const handleEscape = (e) => {
  if (e.key === "Escape") closeModal();
};

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscape);
});

const handleEdit = () => {
  emit('edit', props.note);
  emit('close');
};

const handleDelete = () => {
  emit('delete', props.note);
  emit('close');
};

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