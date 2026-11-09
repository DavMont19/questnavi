
<template>
  <div class="min-h-screen bg-slate-900 text-white p-4">
    
 <header class="flex justify-between items-center pb-4 mb-6 border-b border-slate-800">
  <h1 class="text-xl font-bold text-indigo-400">🗺️ QuestNavi</h1>
  
 
  <nav class="flex items-center">
    <router-link to="/" class="hover:underline text-sm font-medium">Dashboard</router-link>
    <router-link to="/search" class="ml-6 hover:underline text-sm font-medium">Find Games</router-link>
    <router-link to="/archive" class="ml-6 hover:underline text-sm font-medium">Archive</router-link>
  </nav>
</header>

    
    <main>
      <router-view :games="masterGamesList" @update-game="handleGameUpdate" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const masterGamesList = ref([]);


const handleGameUpdate = (updatedGame) => {
  const index = masterGamesList.value.findIndex(g => g.id === updatedGame.id);
  if (index !== -1) {
    masterGamesList.value[index] = updatedGame;
  } else {
    masterGamesList.value.push(updatedGame);
  }
};
</script>
