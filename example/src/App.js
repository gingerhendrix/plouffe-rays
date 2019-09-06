import React, { Component } from 'react'
import 'rc-slider/assets/index.css';

import { PlouffeRay, AnimatedN, AnimatedK } from '@gingerhendrix/plouffe-rays'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Basic</h1>
        <PlouffeRay width={300} height={300} />

        <h1>Animate N</h1>
        <AnimatedN width={300} height={300} interval={30} start={5} end={150}/>

        <h1>Animate K</h1>
        <AnimatedK width={300} height={300} interval={100} start={2} end={100} n={101}/>
      </div>
    )
  }
}
