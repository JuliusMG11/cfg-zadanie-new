<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array,
    required: false,
    default: []
  }
})
</script>
<template>
  <ul>
    <li  
        class="data-box d-flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
         v-for="user in data" 
         :key="user.id"
    >
        <section class="grid grid-cols-2 gap-6">
          <div class="item">
            <strong>Pravidelná výše investice (Kč)</strong>
            <p>{{ user.invesmentCount.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') }} Kč</p>
        </div>
        <div class="item">
            <strong>Jméno a Příjmení</strong>
            <p>{{ user.contactInfo.name }}</p>
          </div>
          <div class="item">
              <strong> Telefonní číslo</strong>
              <p>{{ user.contactInfo.telNumber }}</p>
          </div>
            <div class="item">
              <strong>Email</strong>
              <p>{{ user.contactInfo.email }}</p>
          </div>
          <div class="item">
              <strong>Adresa trvalého pobytu</strong>
              <p>{{ user.privateInformation.address }}</p>
            </div>
           <div class="item">
              <strong>Rodné číslo</strong>
              <p>{{ user.privateInformation.birthNumber }}</p>
            </div>
            <div class="item">
                <strong>Číslo občanského průkazu</strong>
                <p>{{ user.privateInformation.idCardNumber }}</p>
            </div>
            <div class="item">
                <strong>Číslo bankovního účtu</strong>
                <p>{{ user.privateInformation.bankAccountNumber }}</p>
            </div>
        </section>
    </li>
  </ul>
</template>


<style lang="scss" scoped>
li {
  list-style: none;
}

.data-box {
  .grid {
    @media (max-width: 560px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
}
</style>