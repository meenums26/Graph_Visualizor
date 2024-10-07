<template>
  <div>
    <div v-if="hoveredNode" class="modal" @mouseover.stop>
      <div class="modal-content">
        <h3>{{ hoveredNode.name }}</h3>
        <p>{{ hoveredNode.description }}</p>
      </div>
    </div>
    <svg ref="svgRef" :width="width" :height="height"></svg>
  </div>
</template>

<script>
import { useGraphData } from '../composable/useGraphData'; 

export default {
  props: ['onNodeSelect'],
  setup() {
    const width = 1220;
    const height = 525;

    const { svgRef, hoveredNode, hoverNode } = useGraphData(width, height);

    return {
      width,
      height,
      svgRef,
      hoveredNode,
      hoverNode,
    };
  },
};
</script>

