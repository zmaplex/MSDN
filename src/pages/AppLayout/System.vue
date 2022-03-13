<template>
  <q-page class="bg-grey-2">
    <OperatingSystem/>
  </q-page>

</template>

<script lang="ts">

import {defineComponent} from 'vue';
import OperatingSystem from 'components/AppLayout/OperatingSystem.vue'

export default defineComponent({

  name: 'System',
  components: {OperatingSystem}
})
</script>

<style scoped>

</style>
