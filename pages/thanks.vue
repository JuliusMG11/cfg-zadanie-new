<script setup lang="ts">
const router = useRouter();

const getToDashboard = () => {
    router.push('/dashboard')
}
</script>
<template>
  <div class="thanks-page">
    <div class="container mx-auto flex justify-center">
        <div class="mini-container text-center flex items-center">
              <h2 class="title mb-4">
                Dekujeme za odosláni formulářu. 
            </h2>
            <SharedGlobalBtn
                btnSubmit=" "
                @click="getToDashboard"
            >
                Přesunút se na dashboard
            </SharedGlobalBtn>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.thanks-page {
    padding-top: 100px;

    h2 {
        font-size: 52px;
    }
}
.mini-container {
    max-width: 600px;
    width: 100%;
    flex-direction: column;
}
</style>