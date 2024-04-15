
export type Point = [number, number];
export type Vector = [number, number];

export type Line = [Point, Vector];

export function lineFromPoints(a: Point, b: Point): Line {
  const p: Point = a;
  const v: Vector = [b[0] - a[0], b[1] - a[1]];

  return [p, v];
}
