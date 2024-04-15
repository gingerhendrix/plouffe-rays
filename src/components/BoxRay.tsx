import * as React from 'react'
import BoxChord from './BoxChord';

export type Props = {
  width?: number,
  height?: number,
  k?: number,
  n?: number,
  color: string,
}

const PlouffeRay: React.FC<Props> = ({
  width = 900,
  height = 900,
  k = 2,
  n = 100,
  color = '#0000FF',
}) => {
  const [bx1, by1] = [100, 100];
  const [bx2, by2] = [width - 200, height - 200];

  const cx = width/2 - 50;
  const cy = height/2 - 50;
  const r =  200;

  return (
    <svg width={width} height={height}>
      <g>
        {
          Array(n).fill(0).map((_, i) => (
            <BoxChord key={i} cx={cx} cy={cy} r={r} a={i/n * 2 * Math.PI - Math.PI/2} b={((k*i/n) % 1) * 2 * Math.PI - Math.PI/2} color={color} bx1={bx1} bx2={bx2} by1={by1} by2={by2} />
          ))
        }
      </g>
    </svg>
  );
}

export default PlouffeRay;
