<template>
  <div v-if="ui.distribution.show">

    <Distribution></Distribution>
  </div>
  <div v-else class="q-pa-md">

    <div>
      <q-banner v-if="ui.msg && $route.query.operatingSystem!=='home'" class="bg-dark text-white"> {{
          ui.msg
        }}
      </q-banner>
      <div v-else class="column q-gutter-md">
        <div v-for="item in ui.operatingSystemList" :key="item"
             class="apple-card-hover  flex flex-center  system-card" style="min-height: 80px;max-width: 360px"
             @click="clickTo({name:'appSystem',query:{'operatingSystem':item}})">
          <div class="flex q-gutter-md items-center">
            <q-icon :name="`img:assets/img/${item}.svg`" loading="lazy" no-spinner size="36px"></q-icon>
            <div class="title">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {RouteLocationRaw, useRoute, useRouter} from 'vue-router';
import {defineComponent, ref} from 'vue';
import OSImageData from 'src/data/iso';
import Distribution from 'components/AppLayout/Distribution.vue'

console.log(OSImageData)
export default defineComponent({
  name: 'OperatingSystem',
  components: {Distribution},
  setup() {
    const ui = ref({
      distribution: {
        show: false
      },
      msg: '',
      operatingSystemList: Object.keys(OSImageData)
    })
    const route = useRoute()
    const router = useRouter()
    if (route.query.operatingSystem) {
      ui.value.distribution.show = OSImageData.hasOwnProperty(String(route.query.operatingSystem))
      if (!ui.value.distribution.show) {
        ui.value.msg = '暂时没有收录哦'
      }
    } else {

    }


    function clickTo(data: RouteLocationRaw) {
      console.log(data)
      void router.push(data)
    }

    return {
      ui, clickTo
    }
  }
})
</script>

<style>

.system-card {

}

.system-card .title {
  text-transform: capitalize;
  letter-spacing: 0.1rem;
}

</style>
