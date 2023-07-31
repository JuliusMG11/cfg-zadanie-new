<template>
<div class="contact-step">
  <h2 class="title mb-8">
      Vyplňte prosím své kontaktní údaje
   </h2>
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
    Prosím vypľnte jméno a příjmení.
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
      Prosím vypľnte emailovú adresu.
    </SharedErrorMessage>


    <SharedGlobalBtn  class="mt-4"> 
        Potvrdit a přejít na další krok.
    </SharedGlobalBtn>
  </form>
</div>
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

  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name.value)) {
    nameCheckError.value = true;
  } else {
    nameCheckError.value = false;
  }

  const checkNumberFormatted = telNumber.value.replace(/\s/g, ''); 
  const numberPattern = /^[+]?[0-9-]*$/; 

  if (!numberPattern.test(checkNumberFormatted) || telNumber.value.length <= 0) {
    numberCheckError.value = true;
  } else {
    numberCheckError.value = false;
  }

  const checkEmail = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(checkEmail)) {
    emailCheckError.value = true;
  } else {
    emailCheckError.value = false;
  }
  
  if (nameCheckError.value === false && numberCheckError.value === false && emailCheckError.value === false) {
    emit('submit', setContactInfo);
  }
};
</script>