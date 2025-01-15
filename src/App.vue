<template>
  <CountCmp :message="messagetoP"/>
  <PropsCmp :message="messagetoProps"/>
</template>

<script>
import CountCmp from './components/CountCmp.vue';
import PropsCmp from './components/PropsCmp.vue';
export default ({
  components: {
    CountCmp,
    PropsCmp
  },
  data(){
    return{
      messagetoP:"Learning to use Props, message from parent",
      messagetoProps:"message for PropsCmp, from parent app."
    }
  }
})
</script>

<style scoped>

</style>