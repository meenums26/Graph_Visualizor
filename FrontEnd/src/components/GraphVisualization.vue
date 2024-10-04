<template>
    <div>
     
      <div v-if="hoveredNode" class="modal" @mouseover.stop>
        <div class="modal-content">
          <h3>{{ hoveredNode.name }}</h3>
          <p>{{ hoveredNode.description }}</p>
        </div>
      </div>
  
      <svg ref="tree" :width="width" :height="height"></svg>
    </div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    props: ['onNodeSelect'],
    data() {
      return {
        width: 1220,
        height: 525,
        data: [],
        hoveredNode: null, 
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        fetch('http://localhost:5000/data')
          .then((response) => response.json())
          .then((data) => {
            this.data = this.createHierarchy(data.data);
            this.renderTree();
          });
      },
      createHierarchy(data) {
        return d3
          .stratify()
          .id((d) => d.name)
          .parentId((d) => d.parent)(data);
      },
      renderTree() {
        const svg = d3.select(this.$refs.tree);
        const root = d3.hierarchy(this.data);
  
        const treeLayout = d3.tree().size([this.height, this.width - 300]);
        treeLayout(root);
  
       
        svg
          .selectAll('path')
          .data(root.links())
          .enter()
          .append('path')
          .attr('d', (d) => `
            M${d.source.y + 150},${d.source.x + 50}
            L${d.target.y + 150},${d.target.x + 50}
          `)
          .attr('fill', 'none')
          .attr('stroke', 'steelblue')
          .attr('stroke-width', 1);
  
       
        const nodes = svg
          .selectAll('rect')
          .data(root.descendants())
          .enter()
          .append('rect')
          .attr('x', (d) => d.y)
          .attr('y', (d) => d.x)
          .attr('width', 300)
          .attr('height', 100)
          .attr('fill', 'white')
          .attr('stroke', 'steelblue')
          .attr('stroke-width', 1)
          
          .on('mouseover', (event, d) => {
            this.hoverNode(d.data.data); 
            d3.select(event.target).attr('stroke', 'red');
          })
         
          .on('mouseout', (event) => {
            this.hoverNode(null);
            d3.select(event.target).attr('stroke', 'steelblue'); 
          });
  
       
        svg
          .selectAll('text')
          .data(root.descendants())
          .enter()
          .append('text')
          .attr('x', (d) => d.y + 150)
          .attr('y', (d) => d.x + 55)
          .attr('text-anchor', 'middle')
          .attr('fill', 'black')
          .style('font-size', '14px')
          .text((d) => d.data.data.name);

      },
      hoverNode(nodeData) {
       
        this.hoveredNode = nodeData;
      },
    },
  };
  </script>
  
  <style scoped>
  svg {
    background-color: #f9f9f9;
    padding: 20px;
  }
  
  .modal {
    position: fixed;
    top: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 1px;
    width: 300px;
    text-align: center;
  }
  
  .modal h3 {
    margin: 0;
    font-size: 20px;
    color: #333;
  }
  
  .modal p {
    font-size: 16px;
    color: #555;
  }
  </style>
  