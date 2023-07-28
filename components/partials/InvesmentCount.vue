<template>
  <form @submit.prevent="submitinvesmentCount">
    <label class="block text-gray-700 text-sm font-bold mb-4">
      Pravidelná výše investice (Kč) - doplněno o slider
    </label>
    <input 
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      v-model="price" 
      type="number"
    />
    <input
      min="0"
      max="10000000"
      type="range"
      class="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
      id="customRange1"
      v-model="price"
    />

    <SharedGlobalBtn>
     Potvrdit
   </SharedGlobalBtn>
  </form>
</template>
<script setup lang="ts">

import { useUserStore } from '@/stores/user'
const userStore = useUserStore();

const emit = defineEmits(["submit"])

const price = ref(userStore.invesmentCount.price);

const submitinvesmentCount = () => {
  const InvesmentCountData = { price: price.value }
  
  if( price.value > 0){
    emit('submit', InvesmentCountData);
  }
};
</script>