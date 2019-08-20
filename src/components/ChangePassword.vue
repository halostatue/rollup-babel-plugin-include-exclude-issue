<template>
  <vue-password v-model='password' />
</template>

<script>
import VuePassword from 'vue-password'

export default {
  name: 'change-password',
  components: { VuePassword },
  data() {
    return { password: null }
  }
}
</script>

<style lang='scss' scoped>
</style>
