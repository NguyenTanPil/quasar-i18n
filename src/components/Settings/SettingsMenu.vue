<template>
  <q-list
    class="settings-menu"
    :class="{ 'bg-white rounded-borders': $q.screen.lt.md }"
    :bordered="$q.screen.lt.md"
    :separator="$q.screen.lt.md"
  >
    <q-item
      v-for="(section, key) in sections"
      :key="key"
      clickable
      v-ripple
      :active="key === sectionActive"
      :class="{ 'round-borders': $q.screen.gt.sm, 'q-py-md': $q.screen.gt.md }"
      active-class="bg-secondary text-marginal-text"
      @click="setSectionsActiveByKey(key)"
    >
      <q-item-section avatar>
        <q-icon :name="section.icon" />
      </q-item-section>

      <q-item-section class="text-size-16">
        {{ $t(section.label) }}
      </q-item-section>

      <q-item-section v-if="$q.screen.lt.md" avatar>
        <q-icon color="primary" name="chevron_right" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import { useQuasar } from "quasar";
import { storeToRefs } from "pinia";
import { useSettings } from "../../stores/settings";
import { onMounted } from "vue";

const $q = useQuasar();
const settingsStore = useSettings();
const { sections, sectionActive } = storeToRefs(settingsStore);
const { setSectionsActiveByKey, initSettings } = settingsStore;

onMounted(() => {
  initSettings();
});
</script>
