<template>
  <svg
    class="plus-icon-svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.5C18.3513 0.5 23.5 5.64873 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5Z"
      stroke="#002238"
    />
    <mask
      id="mask0_plus"
      style="mask-type: luminance"
      maskUnits="userSpaceOnUse"
      x="4"
      y="3"
      width="17"
      height="17"
    >
      <path d="M20.009 19.998V3.99805L4.00903 3.99805L4.00903 19.998H20.009Z" fill="white" />
    </mask>
    <g mask="url(#mask0_plus)">
      <path d="M18.5544 11.8027H5.58645" stroke="#002238" />
      <path d="M12.051 5.27344V18.2414" stroke="#002238" />
    </g>
  </svg>
</template>

<script setup lang="ts">
defineOptions({ name: 'PlusInCircleIcon' });
</script>
