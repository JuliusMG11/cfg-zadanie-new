<script setup lang="ts">
const props = defineProps({
  btnType: {
    type: String,
    required: false,
    default: 'background'
  },
  btnSubmit: {
   type: String,
   default: 'submit'
  }
})
</script>
<template>
   <button
      :class="btnType"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      :type="btnSubmit">
      <slot></slot>
    </button>
</template>


<style lang="scss" scoped>
button {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   transition: all ease .3s;

   &:hover {
      cursor: pointer;
      box-shadow: #e7633e78 0px 8px 24px;
      transition: all ease .3s;
   }
   &.background {
      background: $color-primary;
      border: solid 1px $color-primary;
      color: $color-white;

      &:hover {
         border: solid 1px $color-primary;
         background: transparent;
         color: $color-primary;
      }
   }

   &.outline-color {
      border: solid 1px $color-primary;
      color: $color-primary;
      background: transparent;

      &:hover {
         background: $color-primary;
         color: $color-white;
      }
   }

   @media (max-width: 650px) {
        padding-left: 12px;
         padding-right: 12px;
   }
}

</style>