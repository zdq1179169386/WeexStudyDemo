<template>
  <div class="wrapper">
    <maintabpage></maintabpage>
  </div>
</template>

<script>
import maintabpage from '@/components/MainTabPage'

export default {
  name: 'App',
  components: {
    maintabpage,
  },
  data () {
    return {
  
    }
  }
}
</script>

<style scoped>
  .wrapper {
    width: 750px;
    justify-content: center;
    align-items: center;
  }
  
</style>
