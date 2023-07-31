<template>
<div class="private-step">
    <h2 class="title mb-8">
      Vyplňte prosím své osobní údaje
   </h2>
    <form 
        class="d-flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
        @submit.prevent="submitPrivateInformation"
    >
        <div class="mobile-grid grid grid-cols-2 gap-6">
            <div class="input">
                <SharedCustomInput
                    v-model="birthNumber"
                    label="Rodné číslo"  
                    type="number"
                />
                <SharedErrorMessage v-if="birthNumberError">
                    Vyplňte prosím správný tvar rodného čísla.
                </SharedErrorMessage>
            </div>
        <div class="input">
                <SharedCustomInput
                    v-model="idCardNumber"
                    label="Číslo občanského průkazu"  
                    type="text"
                />
                <SharedErrorMessage v-if="idCardNumberError">
                    Vyplňte prosím správný tvar pro váš průkaz totožnosti.
                </SharedErrorMessage>
        </div>
        </div>
        <SharedCustomInput
            v-model="address"
            label="Adresa trvalého pobytu"  
            type="text"
        />
        <SharedErrorMessage v-if="addressError">
            Vypľnte prosím adresu trvalého pobytu.
        </SharedErrorMessage>


        <SharedCustomInput
            v-model="bankAccountNumber"
            label="Číslo bankovního účtu (pro případné výplaty výnosů z investice)"  
            type="string"
        />
        <SharedErrorMessage v-if="bankAccountError">
            Vyplňte prosím správný tvar čísla bankovního účtu.
        </SharedErrorMessage>

        <div class="check-box mb-4 mt-6">
            <div class="checkbox-container flex">
                <div class="input">
                    <input 
                        v-model="gdpr"
                        type="checkbox" 
                        class=""
                    >
                </div>
                <legend class="block text-gray-700 text-sm font-bold">
                    Souhlas se zpracováním osobních údajů (žádné osobní údaje nesmí být uloženy bez výslovného souhlasu)
                </legend>
            </div>
            <SharedErrorMessage v-if="gdprError">
                Prosím potvrde souhlas
            </SharedErrorMessage>
        </div>

        <SharedGlobalBtn class="mt-4">
        Odoslať formulář
    </SharedGlobalBtn>
    </form>
  </div>
</template>

<script setup lang="ts">

import { useUserStore } from '@/stores/user'
const userStore = useUserStore();

const emit = defineEmits(["submit"])

const birthNumberError = ref(false)
const idCardNumberError = ref(false)
const addressError = ref(false)
const bankAccountError = ref(false)
const gdprError = ref(false)

const birthNumber = ref(userStore.privateInformation.birthNumber);
const idCardNumber = ref(userStore.privateInformation.idCardNumber);
const address = ref(userStore.privateInformation.address);
const bankAccountNumber = ref(userStore.privateInformation.bankAccountNumber);
const gdpr = ref(false)

const submitPrivateInformation = () => {    
    console.log(birthNumber.value)
     if (birthNumber.value <= 0) {
        birthNumberError.value = true;
    } else {
        birthNumberError.value = false;
    }

    const textRegex = /^[A-Za-z0-9,\/\s]+$/;
     if (!textRegex.test(idCardNumber.value)) {
       idCardNumberError.value = true;
    } else {
        idCardNumberError.value = false;
    }


    if (!textRegex.test(address.value)) {
       addressError.value = true;
    } else {
        addressError.value = false;
    }

    const trimmedAccountNmber = bankAccountNumber.value.trim();
    const accountNumberRegex = /^[0-9]{1,}$/;

     if (!accountNumberRegex.test(trimmedAccountNmber)) {
       bankAccountError.value = true;
    } else {
        bankAccountError.value = false;
    }

     if (gdpr.value === false) {
       gdprError.value = true;
    } else {
        gdprError.value = false;
    }


  const PrivateInformation = { 
    birthNumber:  birthNumber.value,
    idCardNumber: idCardNumber.value,
    address: address.value,
    bankAccountNumber: bankAccountNumber.value,
    gdpr: gdpr.value
  }

  if (birthNumberError.value === false && idCardNumberError.value === false && addressError.value === false &&  bankAccountError.value === false && gdpr.value === true) {
    console.log('SUPER')
    emit('submit', PrivateInformation);
  }
};
</script>

<style lang="scss" scoped>
form {
    flex-direction: column;
}

.check-box {
    input {
        width: 20px;
        height: 20px;
        margin-right: 16px;
    }
}
.mobile-grid {
    @media (max-width: 560px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
