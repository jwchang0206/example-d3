import * as d3 from 'd3';

const url = 'https://udemy-react-d3.firebaseio.com/ages.json';

class D3Chart {
  constructor(element) {
    const svg = d3.select(element)
      .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    (async () => {
      const agesData = await d3.json(url);

      const rects = svg.selectAll('rect')
        .data(agesData);

      rects.enter()
        .append('rect')
        .attr('x', (d, i) => i * 100)
        .attr('y', 50)
        .attr('width', 50)
        .attr('height', d => d.age * 10)
        .attr('fill', d =>
          d.age > 10 ? 'red' : 'green'
        );
    })();


  }
}

export default D3Chart;
