<!-- src/App.vue -->
<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
@import './assets/styles.css';
</style>
