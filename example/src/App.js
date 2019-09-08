import React, { Component } from 'react'
import 'rc-slider/assets/index.css';

import { PlouffeRay, AnimatedN, AnimatedK } from '@gingerhendrix/plouffe-rays'

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
        <Example title="Basic">
          <PlouffeRay width={300} height={300} />
        </Example>

        <Example title="Animate N">
          <AnimatedN width={300} height={300} interval={100} start={5} end={300} k={17}/>
        </Example>

        <Example title="Animate K">
          <AnimatedK width={300} height={300} interval={100} start={2} end={100} n={101}/>
        </Example>
      </div>
    )
  }
}
