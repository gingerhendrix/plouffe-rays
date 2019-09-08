import * as React from 'react';
import Animated, { Props } from './Animated';

const AnimatedN = (props: Props) => <Animated {...props} animateFunction={(t, props) => ({ ...props, n: t })} />

export default AnimatedN;


