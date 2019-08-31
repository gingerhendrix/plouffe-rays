import React, { Component } from 'react';
import './App.css';

const Chord = ({cx, cy, r, a, b}) =>
  <line x1={cx + r*Math.cos(a)} y1={cy + r*Math.sin(a)} x2={cx + r*Math.cos(b)} y2={cy + r*Math.sin(b)} stroke="#339966" />

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
    const cx = 450;
    const cy = 450;
    const r = 400;
    const m = 12 //+ t;
    const k = 4;// + t*0.02;
    const showCircle = true;
    const showLabels = true;

    return (
      <div className="App">
        <svg width="900" height="900">
          <g>
            { showCircle ?
              <circle cx={cx} cy={cy} r={r} fill="none" stroke="black" /> :
              null
            }
            {
              Array(m).fill(0).map((_, i) => (
                <Chord key={i} cx={cx} cy={cy} r={r} a={i * 2 * Math.PI/m - Math.PI/2} b={(Math.round(k*i) % m) * 2 * Math.PI/m - Math.PI/2} />
              ))
            }
            {
              showLabels && Array(m).fill(0).map((_, i) => (
                <text x={cx + 1.05*r*Math.cos(i * 2 * Math.PI/m - Math.PI/2)} y={cy + 1.05*r*Math.sin(i * 2 * Math.PI/m - Math.PI/2)} >{i}</text>
              ))
            }
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
