export default {
    namespaced:true,

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
            state.count= state.count+n;
        },
        reduce:function (state,n) {
            state.count = state.count - n;
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

}
