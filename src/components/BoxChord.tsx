import * as React from 'react'

export type Props = {
  cx: number,
  cy: number,
  bx1: number,
  bx2: number,
  by1: number,
  by2: number,
  r: number,
  a: number,
  b: number,
  color?: string,
  extend?: number,
};



const BoxChord: React.FC<Props> = ({cx, cy, r, a, b, color = '#339966', bx1, bx2, by1, by2}) => {
  const x1 = cx + r*Math.cos(a);
  const y1 = cy + r*Math.sin(a);
  const x2 = cx + r*Math.cos(b); 
  const y2 = cy + r*Math.sin(b);

  const dx = x2 - x1;
  const dy = y2 - y1;

  const lx = Math.min(bx1, bx2);
  const ly = y1 + (lx - x1)/dx * dy;

  const rx = Math.max(bx1, bx2);
  const ry = y1 + (rx - x1)/dx * dy;

  const ty = Math.min(by1, by2);
  const tx = x1 + (ty - y1)/dy * dx;

  const by = Math.max(by1, by2);
  const bx = x1 + (by - y1)/dy * dx;

  let ex1, ey1, ex2, ey2;
  if (dx === 0) { // Vertical line
    [ex1, ey1] = [tx, ty];
    [ex2, ey2] = [bx, by];
  } else if (dy === 0) { //  Horizontal Line
    [ex1, ey1] = [lx, ly];
    [ex2, ey2] = [rx, ry];
  } else {
    if (tx < lx) {
      [ex1, ey1] = [lx, ly]
    } else if (tx > rx) {
      [ex1, ey1] = [rx, ry]
    } else {
      [ex1, ey1] = [tx, ty]
    }

    if (bx < lx) {
      [ex2, ey2] = [lx, ly]
    } else if (bx > rx) {
      [ex2, ey2] = [rx, ry]
    } else {
      [ex2, ey2] = [bx, by]
    }
  }

  console.log({x1, y1, x2, y2, lx, ly, rx, ry, ty, tx, by, bx, ex1, ey1, ex2, ey2});

  return (
    <line x1={ex1} y1={ey1} x2={ex2} y2={ey2} stroke={color} />
  )
}

export default BoxChord;

