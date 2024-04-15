import * as React from 'react'

export type Props = {
  cx: number,
  cy: number,
  r: number,
  a: number,
  b: number,
  color?: string,
  extend?: number,
};

const Chord: React.FC<Props> = ({cx, cy, r, a, b, color = '#339966', extend = 10}) => {
  const x1 = cx + r*Math.cos(a);
  const y1 = cy + r*Math.sin(a);
  const x2 = cx + r*Math.cos(b); 
  const y2 = cy + r*Math.sin(b);

  const ex1 = x2 - extend * (x2 - x1)
  const ey1 = y2 - extend * (y2 - y1)
  const ex2 = x1 + extend * (x2 - x1)
  const ey2 = y1 + extend * (y2 - y1)

  return (
    <line x1={ex1} y1={ey1} x2={ex2} y2={ey2} stroke={color} />
  )
}

export default Chord;

