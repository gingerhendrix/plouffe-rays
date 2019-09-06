import * as React from 'react'

export type Props = {
  cx: number,
  cy: number,
  r: number,
  a: number,
  b: number,
  color?: string,
};

const Chord: React.FC<Props> = ({cx, cy, r, a, b, color = '#339966'}) =>
  <line x1={cx + r*Math.cos(a)} y1={cy + r*Math.sin(a)} x2={cx + r*Math.cos(b)} y2={cy + r*Math.sin(b)} stroke={color} />

export default Chord;

