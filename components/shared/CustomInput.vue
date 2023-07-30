
<script setup lang="ts">
// const props = defineProps({
//   label: {
//     type: String,
//     required: false,
//     default: ''
//   },
//   type: {
//     type: String,
//     required: false,
//     default: 'text'
//   },
//   modelValue: {
//     required: false,
//   }
// })
defineProps(['modelValue', 'label', 'type'])
defineEmits(['update:modelValue'])
</script>

<template>
    <label class="block text-gray-700 text-sm font-bold mb-4 pt-6">
        {{ label }}
    </label>
    <input 
        :type="type" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
         class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
    />
</template>

<style lang="scss" scoped>

/* Skryjeme sipky v inputu s typem number */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Pro Firefox */
}


</style>