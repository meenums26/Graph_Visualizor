import * as d3 from 'd3';
import { ref, onMounted } from 'vue';

export function useGraphData(width, height) {
  const data = ref([]);
  const hoveredNode = ref(null);
  const svgRef = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/data');
      const json = await response.json();
      data.value = createHierarchy(json.data);
      renderTree();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const createHierarchy = (data) => {
    return d3
      .stratify()
      .id((d) => d.name)
      .parentId((d) => d.parent)(data);
  };

  const renderTree = () => {
    const svg = d3.select(svgRef.value);
    const root = d3.hierarchy(data.value);

    const treeLayout = d3.tree().size([height, width - 300]);
    treeLayout(root);

    // graph node links section
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

    // graph nodes section
    svg
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
        hoverNode(d.data.data);
        d3.select(event.target).attr('stroke', 'red');
      })
      .on('mouseout', (event) => {
        hoverNode(null);
        d3.select(event.target).attr('stroke', 'steelblue');
      });

    // graph node text secrion
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
  };

  const hoverNode = (nodeData) => {
    hoveredNode.value = nodeData;
  };

  onMounted(fetchData);

  return {
    svgRef,
    hoveredNode,
    hoverNode,
  };
}
