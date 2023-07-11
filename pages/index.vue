<template>
  <div class="bg-slate-500">
    <IconsBell />
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup>
  const response = await $fetch("/api/hello")
  console.log(response)
</script>