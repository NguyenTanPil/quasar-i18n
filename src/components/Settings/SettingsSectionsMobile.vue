<template>
  <Transition
    appear
    enter-active-class="animated slideInRight faster"
    leave-active-class="animated slideOutRight faster"
  >
    <PaneComponent right class="lt-md" v-if="sectionActive">
      <PaneHeader>
        <template v-slot:buttons-left>
          <q-btn
            class="~lt-md"
            color="text-marginal-text text-size-16"
            padding="7px 10px 7px 2px"
            no-caps
            flat
            @click="setSectionActiveToNull"
          >
            <q-icon name="keyboard_arrow_left" />
            {{ $t("Setting") }}
          </q-btn>
        </template>
        <template v-slot:title> todo </template>
      </PaneHeader>
      <PaneBody>
        <div class="q-pa-md">
          <SettingsSections />
        </div>
      </PaneBody>
    </PaneComponent>
  </Transition>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useSettings } from "src/stores/settings";
import PaneBody from "../Pane/PaneBody.vue";
import PaneComponent from "../Pane/PaneComponent.vue";
import PaneHeader from "../Pane/PaneHeader.vue";
import SettingsSections from "./SettingsSections.vue";

const settingsStore = useSettings();
const { sectionActive } = storeToRefs(settingsStore);
const { setSectionActiveToNull } = settingsStore;
</script>
