import * as React from 'react';
import useIntervalTimer from '@gingerhendrix/use-interval-timer';
import Controls from '@gingerhendrix/react-animation-controls';
import PlouffeRay, { Props as PlouffeRayProps } from './PlouffeRay';

export type Props = PlouffeRayProps & {
  interval?: number,
  start?: number,
  end?: number,
  animateFunction: (tick: number, props: PlouffeRayProps) => PlouffeRayProps,
}

const Animated: React.FC<Props> = ({
  interval = 100,
  start = 2,
  end = 100,
  width,
  animateFunction,
  ...props
}) => {
  const maxTicks = end - start;
  const {tick: t, started, start: startFn, stop, setTick} = useIntervalTimer({interval, maxTicks});

  const plouffeProps = { ...props, ...animateFunction(t + start, props)};

  return (
    <div style={{width}}>
      <PlouffeRay width={width} {...plouffeProps}  />
      <Controls n={t} max={maxTicks} started={started} start={startFn} stop={stop} setTick={setTick} />
    </div>
  );
}

export default Animated;


