<script setup>
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.vue";
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
import AddNote from "./components/Buttons/AddNote.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <ThemeToggle />
    <div class="flex-1 flex flex-col">
      <AddNote />
    </div>
    <Footer />
  </div>
</template>
