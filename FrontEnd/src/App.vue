<template>
  <div id="app">
    <GraphVisualization />
  </div>
</template>

<script>
import GraphVisualization from './components/GraphVisualization.vue';

export default {
  data() {
    return {
      selectedNode: null,
    };
  },
  components: {
    GraphVisualization,
   
  },
  methods: {
    selectNode(node) {
      this.selectedNode = node;
    },
    deselectNode() {
      this.selectedNode = null;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
}
</style>
