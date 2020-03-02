import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({

    state:{
        count:1
    },
    getters:{
        getStateCount:function(state){
            return state.count+1;
        }
    },

    mutations:{
        add:function (state,n) {
            state.count= this.state.count+n;
        },
        reduce:function (state,n) {
            state.count = this.state.count - n;
        }
    },

    actions:{
        addFun(context,n){
            context.commit("add",n);
        },
        reduction(context,n){
            context.commit("reduce",n);
        }
    }


});

export default store
