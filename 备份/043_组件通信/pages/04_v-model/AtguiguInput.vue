<template>
  <input 
    type="text" 
    v-model="ming"
  >
  <br>
  <input 
    type="text" 
    :value="mima"
    @input="emit('update:mima',(<HTMLInputElement>$event.target).value)"
  >
  <!-- <input type="text" 
    :value="modelValue" 
    @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"/> -->
</template>

<script setup lang="ts" name="AtguiguInput">

  defineProps(['mima'])
  const emit = defineEmits(['update:mima'])

  const [ming, modifiers] = defineModel('ming', {
    set(value: string) {
        if (modifiers.capitalize) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
        return value
    },
    get(value: string) {
        if (modifiers.capitalize) {
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
        return value
    },
  })
  console.log(ming, modifiers)
  /* defineProps(['modelValue'])
  const emit = defineEmits(['update:modelValue']) */
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>