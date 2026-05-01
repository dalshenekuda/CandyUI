<template>
  <svg
    class="modal-close-icon"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.250034 0.263604C0.583412 -0.087868 1.12392 -0.087868 1.4573 0.263604L13.9778 13.4636C14.3111 13.8151 14.3111 14.3849 13.9778 14.7364C13.6444 15.0879 13.1039 15.0879 12.7705 14.7364L0.250034 1.5364C-0.0833445 1.18492 -0.0833445 0.615076 0.250034 0.263604Z"
      fill="currentColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.9778 0.263604C14.3111 0.615076 14.3111 1.18492 13.9778 1.5364L1.4573 14.7364C1.12392 15.0879 0.583412 15.0879 0.250034 14.7364C-0.0833445 14.3849 -0.0833445 13.8151 0.250034 13.4636L12.7705 0.263604C13.1039 -0.087868 13.6444 -0.087868 13.9778 0.263604Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
defineOptions({ name: 'CloseIconModal' });
</script>

<style scoped>
.modal-close-icon {
  color: var(--primary-color-1);
}
</style>
