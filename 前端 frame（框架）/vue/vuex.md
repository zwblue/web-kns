vuex 
1、vuex与全局对象有什么不同
  vuex中的状态存储是响应式的。当vue组件从store中读取状态时，若store中的太太发生变化，那么相应的组件也会相应地得到高效更新。
2、你不能直接接变store中的状态.只能显式地的提交（commit） mutation。 这样使得我们可以方便的跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好的了解我们的应用。

vuex下面有state,mutation,getter,action,module
    store/index.js 中代码： 
    import Vue from "vue";
    import Vuex from 'vuex';
    Vue.use(Vuex);
    import vuexExample from './vuexExample';
    import routerdata from './routerdata';
    const store =new Vuex.Store({
        modules:{
            vuexExample,
            routerdata
        }
    })
    export default store;


    state: 用法
      import {mapState} from 'vuex'

      1.computed中 username:this.$store.state.vuexExample.username 

      2.computed中 ...mapState(['vuexExample'])


    mutation：用法
      import {mapMutations} from 'vuex';
      
      (1) this.$store.commit('vuexExample/CHNANGE_USERNAME', '王五')

      (2) methods: ...mapMutations({
                changeUsername: 'vuexExample/CHNANGE_USERNAME'
          })


    getter：用法
      import {mapGetters} from 'vuex'

      computed:{
        (1) username(){
              return this.$store.getters['vuexExample/doneDate'];
            },
        (2) ...mapGetters({doneDate:'vuexExample/doneDate'})
      },


    action: 用法
      import { mapActions } from 'vuex';

      mounted:  
            this.timerChangeName({
                name: '肖云',
                time: 2000
            });

      methods中的 
            ...mapActions({
                timerChangeName: 'vuexExample/timerChangeName'
            }),
            this.$store.dispatch('vuexExample/timerChangeName', {
                    name: this.newUsername,
                    time: this.timeLong
            })