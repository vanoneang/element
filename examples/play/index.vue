<template>
  <div style="margin: 20px;">
    <play-button v-if="route.value === '#button'"></play-button>
    <play-icon v-if="route.value === '#icon'"></play-icon>
    <play-link v-if="route.value === '#link'"></play-link>
    <play-layout v-if="route.value === '#layout'"></play-layout>
    <play-container v-if="route.value === '#containter'"></play-container>
    <play-radio v-if="route.value === '#radio'"></play-radio>
    <play-switch v-if="route.value === '#switch'"></play-switch>
    <play-avatar v-if="route.value === '#avatar'"></play-avatar>
    <!-- <play-select v-if="route.value === '#select'"></play-select> -->
    <play-tag v-if="route.value === '#tag'"></play-tag>
  </div>
</template>

<script>
  import PlayButton from './components/button'
  import PlayIcon from './components/icon'
  import PlayLink from './components/link'
  import PlayContainer from './components/container'
  import PlayLayout from './components/layout'
  import PlayRadio from './components/radio'
  import PlaySwitch from './components/switch'
  import PlayAvatar from './components/atvatar'
<<<<<<< HEAD
  import PlayInput from './components/input'
=======
  // import PlaySelect from './components/select'
  import PlayTag from './components/tag'
>>>>>>> 50e29b9ef32357b1521429be5e2f44aa40421127

  import useRoute from './route'

  export default {
    components: {
      PlayButton,
      PlayIcon,
      PlayLink,
      PlayContainer,
      PlayLayout,
      PlayRadio,
<<<<<<< HEAD
      PlaySwicth,
      PlayAvatar,
      PlayInput
=======
      PlaySwitch,
      PlayAvatar,
      // PlaySelect,
      PlayTag
>>>>>>> 50e29b9ef32357b1521429be5e2f44aa40421127
    },
    data() {
      return {
        route: useRoute()
      };
    },
  };
</script>
