<template>
  <div class="w-full rounded-xl bg-primary-6 border border-primary-6 p-xxs">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ContentPlate' });
</script>
