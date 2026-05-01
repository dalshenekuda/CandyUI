<template>
  <svg
    class="minus-icon-svg"
    width="24"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9312 0.5C19.2824 0.5 24.4312 5.64873 24.4312 12C24.4312 18.3513 19.2824 23.5 12.9312 23.5C6.57988 23.5 1.43115 18.3513 1.43115 12C1.43115 5.64873 6.57988 0.5 12.9312 0.5Z"
      stroke="#002238"
    />
    <mask
      id="mask0_minus"
      style="mask-type: luminance"
      maskUnits="userSpaceOnUse"
      x="4"
      y="3"
      width="17"
      height="17"
    >
      <path d="M20.9292 19.998V3.99805L4.9292 3.99805L4.9292 19.998H20.9292Z" fill="white" />
    </mask>
    <g mask="url(#mask0_minus)">
      <path d="M19.4731 11.8027H6.50515" stroke="#002238" />
    </g>
  </svg>
</template>

<script setup lang="ts">
defineOptions({ name: 'MinusInCircleIcon' });
</script>
