<template>
  <div id="app">
    <header id="test">
    header
    </header>
    <span id="hello">

      <div>divaa</div>
    </span>

    <div id="module">
      <router-view></router-view>
    </div>
  </div>
</template>

<script >

import Hello from './components/Hello';
import Menu from './components/menu/menu.js'

export default {
  name: 'weixin',
  components:{Hello},
  data () {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('./assets/header_sprite.png') + ')'
      },
      headInfo:{
        backgroundImage: 'url(' + require('./assets/logo_main.png') + ')'
      }
      /*img: require('../assets/header_sprite.png')*/
    }
  }
}
</script>

<style lang="scss" scoped >

#test{
  color:red;
  div{
    color:yellow;
  }
}
</style>
