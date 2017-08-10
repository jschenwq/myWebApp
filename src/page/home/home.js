/**
 * Created by qinmenghuan on 2017/7/22.
 */

import Vue from 'vue';
import Hometel from './Hometel';
require('swiper/dist/css/swiper.css');
require('./home.scss');

export default Vue.component('Home', {
  template:'<Hometel :inputValue="message"/>',
  components: { Hometel },
  data () {
    return {
      message: 'home'
    }
  }
})

