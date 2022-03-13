<template>
  <q-layout style="min-height: 100vh" view="lHh Lpr lFf">
    <q-header class="bg-white text-dark ">
      <q-toolbar class="q-mt-md">

        <q-btn
          :icon="ui.menuBtn.icon"
          aria-label="Menu"
          class="q-mr-sm"
          dense
          flat
          round
          @click="toggleLeftDrawer"
        />

        <div class="row justify-between items-center " style="width: 100%">
          <div>
            <q-toolbar-title v-if="q.platform.is.desktop" class="text-weight-bold">
              MSDN
            </q-toolbar-title>
          </div>

          <div class="q-mr-md q-mt-sm" hidden>
            <div class="row q-gutter-md items-center">
              <q-btn dense flat icon="help_outline"/>

              <q-btn dense flat>
                <q-avatar size="32px">
                  <q-img alt="user avatar" decoding="async" height="32px" loading="lazy" no-spinner src="avatar.svg"
                         width="32px"/>
                </q-avatar>
                <q-menu>
                  <q-list style="min-width: 100px">
                    <q-item v-close-popup clickable>
                      <q-item-section>帮助反馈</q-item-section>
                    </q-item>
                    <q-separator/>
                    <q-item v-close-popup clickable>
                      <q-item-section @click="onLogout">注销</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="1023"
      :width="q.platform.is.mobile ? 360:180"
      class="bg-grey-1 scroll overflow-hidden"
      show-if-above
      @update:model-value="leftDrawerOpen"

    >
      <q-layout class="bg-dropbox-grey">
        <q-page>
          <q-list>
            <q-item>
              <q-item-section class="q-mb-sm ">
                <div class="q-ml-md q-pt-xl">
                  <q-avatar square>
                    <q-img alt="icon" decoding="async" height="48px" loading="lazy" no-spinner src="cloud-computing.png"
                           width="48px"/>
                  </q-avatar>
                </div>
              </q-item-section>
              <q-item-section v-if="q.platform.is.mobile" class="q-mt-md content-end"
                              style=" justify-content: flex-start !important;">
                <q-btn dense flat icon="o_arrow_back_ios_new" @click="leftDrawerOpen=false"></q-btn>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="">
                <q-item-label class="text-subtitle2 text-grey">原版镜像下载</q-item-label>
              </q-item-section>
            </q-item>
            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </q-page>

        <q-footer class="flex flex-center q-pa-md bg-grey-1  text-dark text-subtitle2"
                  style="background-color: #F2F2F2">
          <div class="text-center">
            <div>法律和隐私条款</div>
            <div class="text-grey text-caption">Ver:{{ version }}</div>
          </div>
        </q-footer>
      </q-layout>
    </q-drawer>
    <q-page-container>
      <router-view :key="$route.fullPath"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {onMounted, ref} from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import {useQuasar} from 'quasar'

import config from '../../package.json'
import sourceData from '../data/appLayout';


export default {
  name: 'AppLayout',
  components: {EssentialLink},
  setup() {
    const leftDrawerOpen = ref(false)

    const ui = ref({
      menuBtn: {
        icon: 'o_more_vert'

      },
      status: {
        userIsLogin: false
      }
    })


    onMounted(() => {
      console.log()
    })

    function onLogout() {
      console.log()

    }

    const q = useQuasar()
    return {
      essentialLinks: sourceData.linksList,
      leftDrawerOpen, onLogout, version: config.version, q, ui,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value

      }
    }
  }
}
</script>
