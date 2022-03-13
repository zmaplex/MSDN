<template>
  <div v-if="ui.osVersion.show">
    <OSVersion></OSVersion>
  </div>
  <div v-else class="q-pa-md">
    <!--    <q-card class="apple-card ">-->
    <!--      <div class="q-pa-md text-h6">不好意思，没有找到相关数据</div>-->
    <!--    </q-card>-->


    <div class="column q-gutter-md">
      <div v-for="item in ui.distributionList" :key="item" class="apple-card-hover  flex flex-center  system-card"
           style="min-height: 80px;max-width: 360px" @click="clickTo({name:'appSystem',query:{
                ...$route.query,
                ...{'distribution':item}
              }})"
      >
        <div class="flex q-gutter-md items-center">
          <q-icon :name="`img:assets/img/${ui.operatingSystem}.svg`" loading="lazy" no-spinner size="36px"></q-icon>
          <div class="title">{{ item }}</div>
        </div>
      </div>
    </div>

  </div>
</template>


<script lang="ts">
import {defineComponent, ref} from 'vue';
import OSImageData from 'src/data/iso';
import OSVersion from 'components/AppLayout/OSVersion.vue'
import {RouteLocationRaw, useRoute, useRouter} from 'vue-router';

export default defineComponent({
  name: 'Distribution',
  components: {OSVersion},
  setup() {
    const route = useRoute()
    const router = useRouter()
    let operatingSystemName = String(route.query.operatingSystem)
    let distributionData = OSImageData[operatingSystemName]

    const ui = ref({
      operatingSystem: operatingSystemName,
      osVersion: {
        show: false
      },
      distributionList: Object.keys(distributionData)
    })

    console.log(distributionData)

    if (route.query.distribution) {
      ui.value.osVersion.show = distributionData.hasOwnProperty(route.query.distribution.toString())
    } else {

    }

    function clickTo(data: RouteLocationRaw) {
      void router.push(data)
    }

    return {
      ui, clickTo
    }
  }
})
</script>

<style scoped>

</style>
