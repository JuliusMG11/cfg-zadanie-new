<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const userStore = useUserStore();

const currentStep = ref(1);

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

const submitInvesmentCount = (data) => {
  userStore.setInvesmentCount(data);
  console.log(userStore.invesmentCount)
  nextStep();
};


const submitContactInfo = (data) => {
  userStore.setContactInfo(data);
  console.log(userStore.contactInfo)
  nextStep();
};

const submitPrivateInformation = (data) => {
  userStore.setPrivateInformation(data);
    console.log(userStore.privateInformation)
  nextStep();
};
</script>

<template>
    <div class="home">
    <div class="container mx-auto flex justify-center">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <PartialsInvesmentCount 
            v-if="currentStep === 1" 
            @submit="submitInvesmentCount"
            />
            <PartialsContactInfo 
                v-if="currentStep === 2"
                @submit="submitContactInfo"
            />
            <PartialsPrivateInformation 
                v-if="currentStep === 3"
                @submit="submitPrivateInformation"
            />
        </div>

            <button @click="prevStep" :disabled="currentStep === 1">Previous</button>
            <button @click="nextStep" :disabled="currentStep === 3">Next</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    padding-top: 120px;
    .container {
        flex-direction: column;
        align-items: center;
    }
}

</style>