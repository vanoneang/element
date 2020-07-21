<template>
  <div style="margin: 20px;">
    <play-button v-if="route.value === '#button'"></play-button>
    <play-icon v-if="route.value === '#icon'"></play-icon>
    <play-link v-if="route.value === '#link'"></play-link>
    <play-layout v-if="route.value === '#layout'"></play-layout>
    <play-containter v-if="route.value === '#containter'"></play-containter>
    <play-radio v-if="route.value === '#radio'"></play-radio>
    <play-swicth v-if="route.value === '#swicth'"></play-swicth>
    <play-avatar v-if="route.value === '#avatar'"></play-avatar>
  </div>
</template>

<script>
  import PlayButton from './components/button'
  import PlayIcon from './components/icon'
  import PlayLink from './components/link'
  import PlayContainter from './components/containter'
  import PlayLayout from './components/layout'
  import PlayRadio from './components/radio'
  import PlaySwicth from './components/switch'
  import PlayAvatar from './components/atvatar'

  import useRoute from './route'

  export default {
    components: {
      PlayButton,
      PlayIcon,
      PlayLink,
      PlayContainter,
      PlayLayout,
      PlayRadio,
      PlaySwicth,
      PlayAvatar
    },
    data() {
      return {
        route: useRoute()
      };
    },
  };
</script>
