<template>
  <section>
    <button
      @click="saveData"
      class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
    >
      Guardar
    </button>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  inputs: Object,
  selectValue: {
    type: [Object, String],
    default: "",
  },
});

const emit = defineEmits(["saveSuccess"]);

const saveData = () => {
  const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const now = new Date().toISOString();
  const newNote = {
    title: props.inputs.noteTitle.trim(),
    etiquetas: props.inputs.noteEtiquetas.trim(),
    description: props.inputs.noteDescription.trim(),
    priority: props.selectValue.trim(),
    timestamp: now, // SIEMPRE la fecha actual
  };

  if (props.inputs.index !== undefined && props.inputs.index !== null) {
    existingNotes[props.inputs.index] = newNote;
  } else {
    existingNotes.push(newNote);
  }

  localStorage.setItem("notes", JSON.stringify(existingNotes));
  emit("saveSuccess", { note: newNote, index: props.inputs.index });
};
</script>
