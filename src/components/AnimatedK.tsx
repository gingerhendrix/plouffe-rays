import * as React from 'react';
import Animated, { Props } from './Animated';

const AnimatedK = (props: Props) => <Animated {...props} animateFunction={(t, props) => ({ ...props, k: t })} />

export default AnimatedK;


