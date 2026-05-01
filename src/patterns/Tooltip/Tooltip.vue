<template>
  <TooltipProvider :delay-duration="delayDuration">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>

      <TooltipPortal>
        <TooltipContent
          :side="side"
          :side-offset="sideOffset"
          class="inline-flex items-center justify-center gap-[10px] bg-primary-1 text-white-alpha-100 py-s px-[14px] rounded-lg text-sm shadow-md max-w-xs data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=delayed-open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 duration-fast z-50"
        >
          {{ content }}
          <TooltipArrow class="fill-primary-1" :width="20" :height="15" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<script setup lang="ts">
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from 'reka-ui';
import type { TooltipProps } from './types';

withDefaults(defineProps<TooltipProps>(), {
  side: 'top',
  sideOffset: 5,
  delayDuration: 200,
});
</script>
