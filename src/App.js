import React, { Component } from 'react';
import './App.css';

const Chord = ({cx, cy, r, a, b}) =>
  <line x1={cx + r*Math.cos(a)} y1={cy + r*Math.sin(a)} x2={cx + r*Math.cos(b)} y2={cy + r*Math.sin(b)} stroke="black"/>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {t: 0};
  }

  componentDidMount() {
    window.setInterval(this.animate, 30)
  }

  animate = () => {
    const { t } = this.state;
    this.setState({ t: t + 1 })
  }

  render() {
    const { t } = this.state;
    const cx = 250;
    const cy = 250;
    const r = 200;
    const m = 193;
    const k = 2 + t*0.005;
    const showCircle = true;
    return (
      <div className="App">
        <svg width="500" height="500">
          <g>
            { showCircle ?
              <circle cx={cx} cy={cy} r={r} fill="none" stroke="black" /> :
              null
            }
            {
              Array(m).fill(0).map((_, i) => (
                <Chord key={i} cx={cx} cy={cy} r={r} a={i * 2 * Math.PI/m} b={(Math.round(k*i) % m) *2 * Math.PI/m} />
              ))
            }
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
