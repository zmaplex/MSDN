<template>
  <div class="row q-gutter-md q-pa-md">
    <div v-for="item in ui.osVersionList " :key="item" class="col-md-3 col-sm-12 col-xs-12">
      <div class="flex q-gutter-sm items-center">
        <q-icon name="remove"></q-icon>
        <div class="text-body1 text-bold  ">{{ ui.distribution.toUpperCase() }} {{ item }}</div>
      </div>
      <OSVersionDetail :os_detail_list="osVersionData[item]"></OSVersionDetail>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent, ref} from 'vue';
import OSImageData from 'src/data/iso';
import OSVersionDetail from 'components/AppLayout/OSVersionDetail.vue'

import {RouteLocationRaw, useRoute, useRouter} from 'vue-router';

export default defineComponent({
  name: 'OSVersion',
  components: {OSVersionDetail},
  setup() {
    const route = useRoute()
    const router = useRouter()
    let operatingSystemName = String(route.query.operatingSystem)
    let distributionName = String(route.query.distribution)
    let osVersionData = OSImageData[operatingSystemName][distributionName]

    console.log(osVersionData)
    const ui = ref({
      operatingSystem: operatingSystemName,
      distribution: distributionName,
      osVersionList: Object.keys(osVersionData)
    })


    function clickTo(data: RouteLocationRaw) {
      void router.push(data)
    }

    return {
      ui, clickTo, osVersionData
    }
  }
})
</script>

<style scoped>

</style>
