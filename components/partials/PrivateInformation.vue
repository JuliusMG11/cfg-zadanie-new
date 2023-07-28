<template>
  <form class="flex" @submit.prevent="submitPrivateInformation">
    <label class="block text-gray-700 text-sm font-bold mb-4">
        Rodné číslo
    </label>
    <input v-model="birthNumber" type="number" />

    <label class="block text-gray-700 text-sm font-bold mb-4">
        Číslo občanského průkazu
    </label>
    <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="idCardNumber"
        type="number"
    />

    <label class="block text-gray-700 text-sm font-bold mb-4">
        Adresa trvalého pobytu
    </label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="address"
        type="string"
    />

     <label class="block text-gray-700 text-sm font-bold mb-4">
        Číslo bankovního účtu (pro případné výplaty výnosů z investice)
    </label>
    <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="bankAccountNumber" 
        type="number" 
    />

    <label class="block text-gray-700 text-sm font-bold mb-4">
        Souhlas se zpracováním osobních údajů (žádné osobní údaje nesmí být uloženy bez výslovného souhlasu)
    </label>
    <input 
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        v-model="gdpr" 
        type="checkbox" 
    />

    <SharedGlobalBtn>
     Odoslat
   </SharedGlobalBtn>
  </form>
</template>

<script setup lang="ts">

import { useUserStore } from '@/stores/user'
const userStore = useUserStore();

const emit = defineEmits(["submit"])

const birthNumber = ref(userStore.privateInformation.birthNumber);
const idCardNumber = ref(userStore.privateInformation.idCardNumber);
const address = ref(userStore.privateInformation.address);
const bankAccountNumber = ref(userStore.privateInformation.bankAccountNumber);
const gdpr = ref(userStore.privateInformation.gdpr)

const submitPrivateInformation = () => {
  const PrivateInformation = { 
    birthNumber:  birthNumber.value,
    idCardNumber: idCardNumber.value,
    address: address.value,
    bankAccountNumber: bankAccountNumber.value,
    gdpr: gdpr.value
  }
  emit('submit', PrivateInformation);
};
</script>

<style lang="scss" scoped>
form {
    flex-direction: column;
}
</style>
