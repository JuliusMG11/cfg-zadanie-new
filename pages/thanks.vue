<script setup lang="ts">
const router = useRouter();

const getToDashboard = () => {
    router.push('/dashboard')
}
</script>
<template>
  <div class="thanks-page flex items-center">
    <div class="container mx-auto flex justify-center">
        <div class="mini-container text-center flex items-center">
              <h2 class="title mb-4">
                Děkujeme za odeslání formuláře.
            </h2>
            <SharedGlobalBtn
                btnSubmit=" "
                @click="getToDashboard"
            >
                Přesun na dashboard
            </SharedGlobalBtn>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.thanks-page {
   height: 100vh;

    h2 {
        font-size: 52px;
        @media (max-width: 560px) {
            font-size: 32px;
        }
    }
}
.mini-container {
    max-width: 600px;
    width: 100%;
    flex-direction: column;
}
</style>