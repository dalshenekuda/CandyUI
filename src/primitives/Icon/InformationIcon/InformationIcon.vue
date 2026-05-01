<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_26051_48544)">
      <path
        d="M10 9.58337V13.75"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 6.25833L10.0083 6.24907"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.9974 18.3333C14.5998 18.3333 18.3307 14.6023 18.3307 9.99996C18.3307 5.39759 14.5998 1.66663 9.9974 1.66663C5.39502 1.66663 1.66406 5.39759 1.66406 9.99996C1.66406 14.6023 5.39502 18.3333 9.9974 18.3333Z"
        :stroke="color"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_26051_48544">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup lang="ts">
defineOptions({ name: 'InformationIcon' });

defineProps({
  color: {
    type: String,
    default: 'var(--primary-color-1)',
  },
});
</script>
