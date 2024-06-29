<template>
  <div class="pane absolute fit desktop-shadow-pane" :class="panePositionClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["left", "right", "full-width"]);

const panePositionClass = computed(() => {
  if (typeof props.left === "undefined") {
    return "pane-desktop-left";
  } else if (typeof props.right === "undefined") {
    return "pane-desktop-right";
  } else if (typeof props["full-width"] === "undefined") {
    return "pane-desktop-full-width";
  }
  return "";
});
</script>
