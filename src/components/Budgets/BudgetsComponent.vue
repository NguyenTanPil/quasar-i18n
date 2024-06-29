<template>
  <PaneComponent left>
    <PaneHeader>
      <template v-slot:title>Budgets</template>
      <template v-slot:buttons-right>
        <q-btn color="text-marginal-text" size="md" flat round>
          <q-icon size="md" name="las la-ellipsis-v" />
        </q-btn>
      </template>
    </PaneHeader>
    <PaneBody>
      <div class="q-pa-md">
        <q-btn
          class="full-width q-mb-md"
          color="primary"
          label="Open budget"
          @click="togglePaneEntries"
        />
        <p v-for="i in 10" :key="i">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet
          provident quis nulla perspiciatis. Impedit omnis a beatae odio alias!
          Accusantium eligendi beatae quam ex officiis. Voluptatibus fuga
          accusamus nostrum.
        </p>
      </div>
    </PaneBody>
    <PaneFooter>
      <div class="q-ma-sm">
        <q-btn
          label="Add Budget"
          class="text-size-16 full-width"
          color="secondary"
          padding="9px 16px"
          no-caps
          unelevated
        />
      </div>
    </PaneFooter>
  </PaneComponent>
</template>

<script setup>
import PaneBody from "../Pane/PaneBody.vue";
import PaneComponent from "../Pane/PaneComponent.vue";
import PaneFooter from "../Pane/PaneFooter.vue";
import PaneHeader from "../Pane/PaneHeader.vue";
import { useEntries } from "../../stores/entries";

defineOptions({
  name: "BudgetComponent",
});

const entriesStore = useEntries();
const { togglePaneEntries } = entriesStore;
</script>
