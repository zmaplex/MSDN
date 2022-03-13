<template>
  <q-page class="row items-center justify-evenly bg-grey-2">

    <q-card class="column justify-center apple-card   bg-grey-1" style="min-height:400px;min-width: 360px;width: 60% ">
      <q-card-section class="q-mb-sm text-center text-h6 q-mt-lg"> 小小舟云为您服务</q-card-section>
      <q-card-actions align="center" class="q-gutter-sm">
        <q-btn :to="{'name':'appRegister'}" color="blue-grey-2" label="注册" text-color="dark"></q-btn>
        <q-btn :to="{'name':'appLogin'}" color="primary" label="登陆"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>

import {defineComponent} from 'vue'


export default defineComponent({
  name: 'AppIndex',
  components: {},
  setup() {
    return {}
  }
})
</script>
