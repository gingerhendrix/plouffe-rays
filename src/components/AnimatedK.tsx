import * as React from 'react';
import useIntervalTimer from '@gingerhendrix/use-interval-timer';
import Controls from '@gingerhendrix/react-animation-controls';
import PlouffeRay, { Props as PlouffeRayProps } from './PlouffeRay';

type AnimatedKProps = PlouffeRayProps & {
  interval?: number,
  start?: number,
  end?: number,
}

const AnimatedK: React.FC<AnimatedKProps> = ({
  interval = 100,
  start = 2,
  end = 100,
  ...props
}) => {
  const maxTicks = end - start;
  const {tick: t, started, start: startFn, stop, setTick} = useIntervalTimer({interval, maxTicks});
  const k = start + t;

  return (
    <div>
      <PlouffeRay {...props} k={k} />;
      <Controls n={t} max={maxTicks} started={started} start={startFn} stop={stop} setTick={setTick} />
    </div>
  );
}

export default AnimatedK;


