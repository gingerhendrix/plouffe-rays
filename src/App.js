import React, { Component } from 'react';
import './App.css';

/* random bright color */
const strokeColor = `rgb(${Array(3).fill(0).map(() => Math.floor(Math.random()*200 + 55)).join(',')})`;

const Chord = ({cx, cy, r, a, b}) =>
  <line x1={cx + r*Math.cos(a)} y1={cy + r*Math.sin(a)} x2={cx + r*Math.cos(b)} y2={cy + r*Math.sin(b)} stroke={strokeColor} />

class App extends Component {
  state = {t: 0};

  componentDidMount() { this.tick(); }
  componentWillUnmount() { this.tick = () => {} /* noop */ }

  tick = (timestamp=0) => {
    this.startTime = ( this.startTime || timestamp );
    this.setState({ t: timestamp - this.startTime });
    requestAnimationFrame(this.tick);
  }

  render() {
    const { t } = this.state;
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const cx = vw/2;
    const cy = vh/2;
    const r = Math.min(vw, vh)/2;
    const m = 290; // Math.round(250 * (Math.sin(t*0.0005)/2 + 0.5) + 40);
    const k = 2 + t*0.00015;
    const showCircle = false;

    return (
      <div className="App">
        <svg width={vw} height={vh}>
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
