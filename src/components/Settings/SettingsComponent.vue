<template>
  <PaneComponent full-width>
    <PaneHeader>
      <template v-slot:title>
        {{ $t("Settings") }}
      </template>
    </PaneHeader>
    <PaneBody>
      <div class="q-pa-md row q-col-gutter-lg">
        <div class="settings-menu-col col-shrink ~gt-sm">
          <SettingsMenu />
        </div>

        <SettingsSectionsDesktop v-if="$q.screen.gt.sm" />
      </div>
    </PaneBody>
  </PaneComponent>

  <SettingsSectionsMobile v-if="$q.screen.lt.md" />
</template>

<script setup>
import { onMounted } from "vue";
import { useSettings } from "../../stores/settings";
import PaneBody from "../Pane/PaneBody.vue";
import PaneComponent from "../Pane/PaneComponent.vue";
import PaneHeader from "../Pane/PaneHeader.vue";
import SettingsMenu from "./SettingsMenu.vue";
import SettingsSectionsDesktop from "./SettingsSectionsDesktop.vue";
import SettingsSectionsMobile from "./SettingsSectionsMobile.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const settingsStore = useSettings();
const { initSettings } = settingsStore;

onMounted(() => {
  initSettings();
});
</script>
