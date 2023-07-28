<template>
  <form class="d-flex" @submit.prevent="submitContactInfo ">
    <label class="block text-gray-700 text-sm font-bold mb-4">
        Jméno a Příjmení
    </label>
    <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="name" 
        type="text" 
    />

    <label class="block text-gray-700 text-sm font-bold mb-4 mt-6">
        Telefonní číslo
    </label>
    <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="telNumber" 
        type="nunber" 
    />

     <label class="block text-gray-700 text-sm font-bold mb-4 mt-6">
        Emailová adresa
    </label>
    <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="email" 
        type="text" 
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

const name = ref(userStore.contactInfo.name);
const telNumber = ref(userStore.contactInfo.telNumber);
const email = ref(userStore.contactInfo.email);

const submitContactInfo = () => {
  const setContactInfo = { name: name.value, telNumber: telNumber.value, email: email.value   }
  emit('submit', setContactInfo);
};
</script>