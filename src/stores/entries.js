import { defineStore } from "pinia";
import { ref } from "vue";

export const useEntries = defineStore("entries", () => {
  const showPaneEntries = ref(false);

  const togglePaneEntries = () => {
    showPaneEntries.value = !showPaneEntries.value;
  };

  return { showPaneEntries, togglePaneEntries };
});
