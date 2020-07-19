<template>
  <div style="margin: 20px;">
    <play-button v-if="route.value === '#button'"></play-button>
    <play-icon v-if="route.value === '#icon'"></play-icon>
    <play-link v-if="route.value === '#link'"></play-link>
    <play-layout v-if="route.value === '#layout'"></play-layout>
    <play-containter v-if="route.value === '#containter'"></play-containter>
    <play-radio v-if="route.value === '#radio'"></play-radio>
  </div>
</template>

<script>
  import PlayButton from './components/button'
  import PlayIcon from './components/icon'
  import PlayLink from './components/link'
  import PlayContainter from './components/containter'
  import PlayLayout from './components/layout'
  import PlayRadio from './components/radio'

  import hash from './hash.js'

  export default {
    components: {
      PlayButton,
      PlayIcon,
      PlayLink,
      PlayContainter,
      PlayLayout,
      PlayRadio
    },
    data() {
      return {
        route: hash()
      };
    },
  };
</script>
