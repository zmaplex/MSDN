<template>
  <div class="">
    <q-list bordered class="shadow-0 no-border q-pa-md " style="max-width: 500px">
      <div v-for="item in Object.keys(osDetailData)" :key="item" style="max-width: 90vw !important;">
        <q-expansion-item
          :caption="osDetailData[item].Meta.size !== 'unknown'?osDetailData[item].Meta.size:''"
          :header-style="{'min-height':'40px','max-width':'100%'}"
          :label="item"
          class="text-dark wrap bg-apple-grey  apple-card-hover no-border-radius"
          header-class="q-pa-md"
          expand-separator
        >
          <q-card class=" bg-apple-grey">
            <q-card-section>
              <div v-if="osDetailData[item].Meta.description" class="q-pa-sm">
                {{ osDetailData[item].Meta.description }}
              </div>
              <div class="flex q-gutter-sm q-mt-sm">
                <q-chip class="bg-grey-2" square>
                  <div class="flex q-gutter-sm">
                    <div>Architecture:</div>
                    <div class="text-green"> {{ osDetailData[item].Meta.architecture.toUpperCase() }}
                    </div>
                  </div>

                </q-chip>
                <q-chip class="bg-grey-2" square>
                  <div class="flex q-gutter-sm">
                    <div>Create:</div>
                    <div class="text-accent"> {{ osDetailData[item].Meta.at_date }}
                    </div>
                  </div>

                </q-chip>
                <q-chip class="bg-grey-2" square>
                  <div class="flex q-gutter-sm">
                    <div>Update:</div>
                    <div class="text-blue"> {{ osDetailData[item].Meta.up_date }}
                    </div>
                  </div>

                </q-chip>
                <q-chip class="bg-grey-2" square>
                  <div class="flex q-gutter-sm">
                    <div>Size:</div>
                    <div class="text-blue"> {{ osDetailData[item].Meta.size }}
                    </div>
                  </div>
                </q-chip>
              </div>
              <q-separator class="q-mt-sm bg-red"></q-separator>
              <div class="q-mt-sm flex q-gutter-sm">
                <q-btn v-if="osDetailData[item].Direct" :href="osDetailData[item].Direct" color="blue-grey-2"
                       flat
                       icon="download"
                       label="直连下载"
                       target="_blank" text-color="dark"
                       type="a"></q-btn>
                <q-btn
                  v-if="osDetailData[item].BitTorrent"
                  :href="osDetailData[item].BitTorrent"
                  :icon="'img:assets/img/qbittorrent.svg'"
                  color="primary" flat
                  label="种子下载" target="_blank"></q-btn>
                <q-btn
                  v-if="osDetailData[item].ED2K"
                  :href="osDetailData[item].ED2K"
                  color="blue-grey"
                  flat
                  icon="img:assets/img/ed2k.webp"
                  label="ED2K下载"
                  type="a"></q-btn>
                <q-btn v-if="osDetailData[item].BoatCloud"
                       :href="osDetailData[item].BoatCloud"
                       color="dark" icon="cloud_download" label="舟云高速"
                       target="_blank"
                       text-color="yellow"></q-btn>
                <q-btn v-for="item in osDetailData[item].Extend" :key="item.name" :href="item.url" :label="item.name"
                       flat
                       type="a"></q-btn>
              </div>

            </q-card-section>
          </q-card>

        </q-expansion-item>
        <q-separator color="blue-grey-1"></q-separator>
      </div>
    </q-list>
  </div>

</template>


<script lang="ts">
import {defineComponent, PropType, ref} from 'vue';
import {OSDetailIF} from 'src/data/iso';

export default defineComponent({
  name: 'OSVersionDetail',
  components: {},
  props: {
    os_detail_list: {
      type: Array as PropType<OSDetailIF[]>,
      required: true,
    }
  },
  setup(props) {
    let osDetailData: Record<string, OSDetailIF> = {}
    for (let item of props.os_detail_list) {
      osDetailData[item.Meta.name] = item
    }
    const ui = ref({
      tab: null
    })
    console.log({'props': props.os_detail_list})

    return {props, ui, osDetailData}
  }
})
</script>

<style scoped>
.q-item__section--main {
  /* width: auto; */
  /*overflow-x: auto;*/
  /*white-space: nowrap;*/
}

.q-item__section {

}


</style>
<style>
.q-item__section .q-item__label {
  overflow: auto !important;
}
</style>
