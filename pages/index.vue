<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const userStore = useUserStore();
const router = useRouter();

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
  userStore.submitFormDataToAPI()
  router.push('/thanks')
};
</script>

<template>
    <div class="home relative">
      <div class="container mx-auto flex justify-center">
        <div class="small-container">
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
             <div class="buttons-group flex  justify-between">
              <SharedGlobalBtn
                  btnType="outline-color"
                  @click="prevStep" 
                  :disabled="currentStep === 1"
                >
                  Predošlí krok
              </SharedGlobalBtn>
            </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    padding-top: 80px;
    padding-bottom: 80px;
    .container {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 560px) {
      padding-top: 120px;
    }
}

.buttons-group {
  width: 100%;
  margin-top: 32px;
}
</style>