import * as React from 'react';
import useIntervalTimer from '@gingerhendrix/use-interval-timer';
import Controls from '@gingerhendrix/react-animation-controls';
import PlouffeRay, { Props as PlouffeRayProps } from './PlouffeRay';

type AnimatedNProps = PlouffeRayProps & {
  interval?: number,
  start?: number,
  end?: number,
}

const AnimatedN: React.FC<AnimatedNProps> = ({
  interval = 100,
  start = 10,
  end = 500,
  ...props
}) => {
  const maxTicks = end - start;
  const {tick: t, started, start: startFn, stop, setTick} = useIntervalTimer({interval, maxTicks});
  const n = start + t;

  return (
    <div>
      <PlouffeRay {...props} n={n} />;
      <Controls n={t} max={maxTicks} started={started} start={startFn} stop={stop} setTick={setTick} />
    </div>
  );
}

export default AnimatedN;


