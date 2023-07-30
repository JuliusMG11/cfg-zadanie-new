<template>
  <form 
    class="d-flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
    @submit.prevent="submitContactInfo "
  >
     <SharedCustomInput
        v-model="name"
        label="Jméno a Příjmení"  
        type="text"
      />
     <SharedErrorMessage v-if="nameCheckError">
      Prosím vypľnte jméno a příjmení
    </SharedErrorMessage>

    <SharedCustomInput
        v-model="telNumber"
        label="Telefonní číslo"  
        type="text"
      />
    <SharedErrorMessage v-if="numberCheckError">
      Neplatné telefonní číslo.
    </SharedErrorMessage>

    <SharedCustomInput
        v-model="email"
        label=" Emailová adresa"  
        type="text"
      />

    <SharedErrorMessage v-if="emailCheckError">
      Prosím vypľnte emailovú adresu
    </SharedErrorMessage>


   <SharedGlobalBtn  class="mt-4"> 
      Potvrdit a přejít na další krok
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

const nameCheckError = ref(false)
const numberCheckError = ref(false)
const emailCheckError = ref(false)


const submitContactInfo = () => {
  const setContactInfo = { name: name.value, telNumber: telNumber.value, email: email.value   }
  console.log(name.value)

  if (!name.value.trim()) {
    nameCheckError.value = true;
  } else {
    nameCheckError.value = false;
  }

  const checkNumberFormatted = telNumber.value.replace(/\s/g, ''); // Odstranění mezer
  const numberPattern = /^[+]?[0-9-]*$/; // Regulární výraz pro kontrolu t

    if (!numberPattern.test(checkNumberFormatted) || telNumber.value.length <= 0) {
    numberCheckError.value = true;
    } else {
      // Odeslání formuláře nebo provedení další logiky
      numberCheckError.value = false;
      // submitToServer();
    }

    const checkEmail = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    if (!emailRegex.test(checkEmail)) {
    emailCheckError.value = true;
    } else {
      // Odeslání formuláře nebo provedení další logiky
    emailCheckError.value = false;
      // submitToServer();
    }
  
  if (name.value.trim() && numberCheckError.value === false && emailRegex.test(checkEmail)) {
    emit('submit', setContactInfo);
  }
};
</script>