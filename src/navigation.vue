
<template>
  <div class="min-h-screen bg-slate-900 text-white p-4">
    <!-- Basic Skeleton Navigation Header -->
 <header class="flex justify-between items-center pb-4 mb-6 border-b border-slate-800">
  <h1 class="text-xl font-bold text-indigo-400">🗺️ QuestNavi</h1>
  
  <!-- We remove 'gap-6' from the nav container and push links apart using margins instead -->
  <nav class="flex items-center">
    <router-link to="/" class="hover:underline text-sm font-medium">Dashboard</router-link>
    <router-link to="/search" class="ml-6 hover:underline text-sm font-medium">Find Games</router-link>
    <router-link to="/archive" class="ml-6 hover:underline text-sm font-medium">Archive</router-link>
  </nav>
</header>

    <!-- The stage view where your pages get injected -->
    <main>
      <router-view :games="masterGamesList" @update-game="handleGameUpdate" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// The basic reactive array placeholder for your tracking data
const masterGamesList = ref([]);

// Simple state handler function shell
const handleGameUpdate = (updatedGame) => {
  const index = masterGamesList.value.findIndex(g => g.id === updatedGame.id);
  if (index !== -1) {
    masterGamesList.value[index] = updatedGame;
  } else {
    masterGamesList.value.push(updatedGame);
  }
};
</script>
