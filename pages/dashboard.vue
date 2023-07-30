<script setup lang="ts">
import { getUsers } from '@/stores/getter'
const userStore = getUsers();

const data = ref()

const loadUsers = async() => {
    await userStore.fetchUsers();
    data.value = userStore.getUsersData
};
loadUsers()
</script>

<template>
  <div class="dashboard-page">
    <div class="container mx-auto flex justify-center">
      <div class="small-container">
        <h2 class="title">DASHBOARD</h2>
       <PartialsDataBox :data="data" />
      </div>
    </div>
  
  </div>
</template>

<style lang="scss" scoped>

.dashboard-page {
  padding-top: 82px;
  padding-bottom: 82px;

  @media (max-width: 560px) {
    padding-top: 120px;
  }
}

.small-container {
  max-width: 820px;
  width: 100%;
}


</style>