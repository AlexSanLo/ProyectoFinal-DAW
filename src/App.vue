<script setup>
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.vue";
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
import NotesBody from "./components/Layout/NotesBody.vue"; 
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <NotesBody />
    </main>
    <Footer />
  </div>
</template>
