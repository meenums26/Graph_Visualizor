
import { mount } from '@vue/test-utils';
import GraphVisualization from './GraphVisualization.vue';
import flushPromises from 'flush-promises'; 


jest.mock('d3', () => ({
  select: jest.fn().mockReturnThis(),
  hierarchy: jest.fn().mockReturnThis(),
  tree: jest.fn().mockReturnThis(),
  stratify: jest.fn().mockReturnThis(),
 
}));

describe('GraphVisualization.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(GraphVisualization, {
      props: {
        onNodeSelect: jest.fn(),
      },
    });
  });

  it('renders the SVG element', () => {
    const svg = wrapper.find('svg');
    expect(svg.exists()).toBe(true);
  });

  it('fetches data on mount', async () => {
   
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: [] }),
      })
    );

    await flushPromises(); 
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/data');
    expect(wrapper.vm.data).toEqual([]); 
  });

  it('displays modal when hovered over a node', async () => {
   
    wrapper.vm.hoverNode({ name: 'Node 1', description: 'Description 1' });
    await wrapper.vm.$nextTick(); 

    const modal = wrapper.find('.modal');
    expect(modal.exists()).toBe(true);
    expect(modal.text()).toContain('Node 1');
    expect(modal.text()).toContain('Description 1');
  });

  it('does not display modal when hoveredNode is null', async () => {
    wrapper.vm.hoverNode(null);
    await wrapper.vm.$nextTick();

    const modal = wrapper.find('.modal');
    expect(modal.exists()).toBe(false);
  });
});
