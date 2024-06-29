import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettings = defineStore("settings", () => {
  const sectionActive = ref(null);
  const sections = ref([
    {
      icon: "",
      label: "",
    },
  ]);

  const initSettings = () => {};

  const setSectionActiveToNull = () => {
    sectionActive.value = null;
  };

  const setSectionsActiveByKey = (key) => {
    sectionActive.value = key;
  };

  return {
    sectionActive,
    sections,
    initSettings,
    setSectionActiveToNull,
    setSectionsActiveByKey,
  };
});
