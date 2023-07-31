<template>
<div class="first-step">
  <h2 class="title mb-8">
      Začnite s jasným cílem: <br/>Zadejte pravidelnou výši investice (Kč)
  </h2>
  <form 
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
    @submit.prevent="submitinvesmentCount"
  >
    <label class="block text-gray-700 text-sm font-bold mb-8">
      Pravidelná výše investice (Kč)
    </label>
    <input 
      class="mb-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      v-model="price" 
      type="number"
    />
    <input
      min="0"
      max="10000000"
      type="range"
      class="mb-2 transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
      id="customRange1"
      v-model="price"
    />
    <SharedErrorMessage v-show="errorMessage">
      Prosím vypľnte výšku investície.
    </SharedErrorMessage>
    <SharedGlobalBtn class="mt-4">
     Potvrdit a přejít na další krok
    </SharedGlobalBtn>
  </form>
</div>
</template>
<script setup lang="ts">

import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

const emit = defineEmits(["submit"])
const errorMessage = ref(false)

const price = ref(userStore.invesmentCount.price);

const submitinvesmentCount = () => {
  const InvesmentCountData = { price: price.value }
  
  if( price.value > 0){
    emit('submit', InvesmentCountData);
  } else {
    errorMessage.value = true;
  }
};
</script>
