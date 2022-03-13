<template>
  <q-item :active="title.toLowerCase() === $route?.query?.operatingSystem" clickable @click="clickTo(to)">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {RouteLocationRaw, useRouter} from 'vue-router';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },
    to: {
      type: Object
    },

    icon: {
      type: String,
      default: '',
    },
  },
  setup() {
    const router = useRouter()

    function clickTo(data: RouteLocationRaw) {
      console.log(data)
      void router.push(data)
    }

    return {
      clickTo
    }
  }
});
</script>
