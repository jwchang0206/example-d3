import React, { useEffect, useRef } from 'react';
import D3Chart from './D3Chart';

function ChartWrapper() {
  const chartRef = useRef();

  useEffect(() => {
    new D3Chart(chartRef.current);
  }, [])

  return (
    <div style={{ marginTop: 10, marginLeft: 10 }}>
      <div ref={chartRef} />
      {/* <svg width="400" height="60">
        <rect x="0" y="0" width="50" height="50" fill="green" tabIndex="0" />
        <circle cx="90" cy="25" r="25" fill="red" />
        <ellipse cx="145" cy="25" rx="15" ry="25" fill="grey" />
        <line x1="185" y1="5" x2="230" y2="40" stroke="blue" strokeWidth="5" />
        <text x="260" y="25" fontSize="20px" fill="orange" tabIndex="0">Hello World</text>
      </svg> */}
    </div>
  );
}

export default ChartWrapper;
