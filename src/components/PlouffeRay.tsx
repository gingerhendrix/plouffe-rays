import * as React from 'react'
import Chord from './Chord';

export type Props = {
  width?: number,
  height?: number,
  k?: number,
  n?: number,
  showCircle?: boolean,
  showLabels?: boolean,
  color: string,
}

const PlouffeRay: React.FC<Props> = ({
  width = 900,
  height = 900,
  k = 2,
  n = 100,
  showCircle = true,
  showLabels = false,
  color = '#0000FF',
}) => {
  const padding = 300;
  const cx = width/2;
  const cy = height/2;
  const r = width/2 - padding;
  const labelR = width/2 - 20;

  return (
    <svg width={width} height={height}>
      <g>
        { showCircle && <circle cx={cx} cy={cy} r={r} fill="none" stroke="black" />  }
        {
          Array(n).fill(0).map((_, i) => (
            <Chord key={i} cx={cx} cy={cy} r={r} a={i/n * 2 * Math.PI - Math.PI/2} b={((k*i/n) % 1) * 2 * Math.PI - Math.PI/2} color={color} />
          ))
        }
        {
          showLabels && Array(n).fill(0).map((_, i) => (
            <text x={cx + labelR*Math.cos(i/n * 2 * Math.PI - Math.PI/2)} y={cy + labelR*Math.sin(i/n * 2 * Math.PI - Math.PI/2)} >{i}</text>
          ))
        }
      </g>
    </svg>
  );
}

export default PlouffeRay;
