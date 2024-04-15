import React, { Component } from 'react'
import 'rc-slider/assets/index.css';

import { BoxRay, PlouffeRay, AnimatedN, AnimatedK } from '@gingerhendrix/plouffe-rays'

const Example = ({title, children}) => (
  <div style={{width: 300}}>
    <h1>{title}</h1>
    {children}
  </div>
);

export default class App extends Component {
  render () {
    return (
      <div>
        <BoxRay width={1000} height={1000} n={283} k={9} />
        { false && (
          <>
            <PlouffeRay width={1000} height={1000} n={623} k={18} showCircle={false} />
            <Example title="Basic">
              <PlouffeRay width={300} height={300} n={1423} k={9} />
            </Example>

            <Example title="Animate N">
              <AnimatedN width={300} height={300} interval={100} start={5} end={300} k={17}/>
            </Example>

            <Example title="Animate K">
              <AnimatedK width={500} height={500} interval={500} start={2} end={211} n={211}/>
            </Example>
          </>
        )}
      </div>
    )
  }
}
