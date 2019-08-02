<template>
  <div>
    <button @click="add(10)">+1</button>
    <button @click="reduce(+5)">-1</button>
    <button @click="addAction(2)">action-1</button>
    <button @click="$store.dispatch('addAction',100)">action-1</button>
    <h1>{{count}}</h1>
    <h1>{{count2}}</h1>
  </div>
</template>
<script>
import { mapState,mapMutations,mapGetters,mapActions} from "vuex";
export default {
  methods: {
    // add() {
    //   this.$store.commit("add");
    // },
    // reduce() {
    //   this.$store.commit("reduce");
    // }
    ...mapMutations(["add","reduce"]),
    ...mapActions(["addAction"])
  },
  // computed: {
  //     count(){
  //         return this.$store.state.count
  //     }
  // },

  // computed: mapState({
  //     count:state=>state.count
  // }),

  // computed: {
  //     ...mapState({count:state=>state.count})
  // },

  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count2"])
  },
};
</script>
<style scope>
</style>
