<template>
  <svg
    :class="'style-' + colorStyle"
    width="11"
    height="11"
    viewBox="0 0 11 11"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Component 3">
      <path
        id="Line 52 (Stroke)"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.19331 0.19331C0.451056 -0.0644365 0.868944 -0.0644365 1.12669 0.19331L10.8067 9.87331C11.0644 10.1311 11.0644 10.5489 10.8067 10.8067C10.5489 11.0644 10.1311 11.0644 9.87331 10.8067L0.19331 1.12669C-0.0644365 0.868944 -0.0644365 0.451056 0.19331 0.19331Z"
      />
      <path
        id="Line 161 (Stroke)"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8067 0.19331C11.0644 0.451056 11.0644 0.868944 10.8067 1.12669L1.12669 10.8067C0.868944 11.0644 0.451056 11.0644 0.19331 10.8067C-0.0644365 10.5489 -0.0644365 10.1311 0.19331 9.87331L9.87331 0.19331C10.1311 -0.0644365 10.5489 -0.0644365 10.8067 0.19331Z"
      />
    </g>
  </svg>
</template>

<script setup lang="ts">
defineOptions({ name: 'CloseIcon' });

defineProps({
  colorStyle: {
    type: String,
    default: 'dark',
    validator: (value: string) => ['light', 'dark'].includes(value),
  },
});
</script>

<style scoped>
.style-light {
  fill: var(--white-alpha-100);
}

.style-dark {
  fill: var(--primary-color-1);
}
</style>
