<!-- src/views/DashboardView.vue -->
<template>
  <div class="max-w-4xl mx-auto mt-6">
    <h2 class="text-2xl font-bold text-white mb-6">⚔️ Active Quests</h2>

    <!-- Active Games List -->
    <div class="space-y-4">
      <div v-for="game in activeQuests" :key="game.id" class="bg-slate-800 border border-slate-700 p-5 rounded-xl shadow flex gap-4">
        <div class="w-20 h-28 bg-slate-950 rounded flex items-center justify-center text-2xl shadow-inner">
          🎮
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <h3 class="font-bold text-white text-lg">{{ game.name }}</h3>
          <p class="text-xs text-slate-400 font-mono mt-0.5">{{ game.platform }}</p>
          <div class="mt-2 text-xs text-indigo-400 font-medium">
            <span>Progress: </span>
            <span class="font-mono">{{ game.progress }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  games: {
    type: Array,
    default: () => [
      { id: 1, name: "Persona 3 Reload", platform: "PlayStation 5", progress: 35, status: "In Progress" },
      { id: 2, name: "Dragon Age: Origins", platform: "PC (Steam)", progress: 12, status: "In Progress" }
    ]
  }
});

const activeQuests = computed(() => {
  return props.games.filter(game => game.status === 'In Progress');
});
</script>
