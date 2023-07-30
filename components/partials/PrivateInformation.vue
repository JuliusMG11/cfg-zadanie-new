<template>
  <form 
    class="d-flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
    @submit.prevent="submitPrivateInformation"
>
    <div class="mobile-grid grid grid-cols-2 gap-6">
       <div class="input">
        <SharedCustomInput
            v-model="birthNumber"
            label="Rodné číslo"  
            type="text"
        />
         <SharedErrorMessage v-if="birthNumberError">
            Prosím vypľnte rodné číslo
        </SharedErrorMessage>
       </div>
       <div class="input">
            <SharedCustomInput
                v-model="idCardNumber"
                label="Číslo občanského průkazu"  
                type="text"
            />
            <SharedErrorMessage v-if="idCardNumberError">
                Prosím vypľnte číslo občanského průkazu
            </SharedErrorMessage>
       </div>
    </div>
    <SharedCustomInput
        v-model="address"
        label="Adresa trvalého pobytu"  
        type="text"
    />
    <SharedErrorMessage v-if="addressError">
                Prosím vypľnte adresa trvalého pobytu
     </SharedErrorMessage>


    <SharedCustomInput
        v-model="bankAccountNumber"
        label="Číslo bankovního účtu (pro případné výplaty výnosů z investice)"  
        type="string"
    />
    <SharedErrorMessage v-if="bankAccountError">
        Prosím vypľnte číslo bankovního účtu
    </SharedErrorMessage>

    <div class="check-box mb-4 mt-6">
        <div class="checkbox-container flex">
            <input 
            v-model="gdpr"
            type="checkbox" 
            class=""
            >
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
    
     if (!birthNumber.value.trim()) {
        birthNumberError.value = true;
    } else {
        birthNumberError.value = false;
    }

     if (!idCardNumber.value.trim()) {
       idCardNumberError.value = true;
    } else {
        idCardNumberError.value = false;
    }

    if (!address.value.trim()) {
       addressError.value = true;
    } else {
        addressError.value = false;
    }

    const trimmedAccountNmber = bankAccountNumber.value.trim();
    const accountNmberRegex = /^[0-9]{1,}$/;

     if (!accountNmberRegex.test(trimmedAccountNmber)) {
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

  if (birthNumber.value.trim() && idCardNumber.value.trim() && address.value.trim() &&  accountNmberRegex.test(trimmedAccountNmber) && gdpr.value === true) {
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
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }
}
.mobile-grid {
    @media (max-width: 560px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>
