import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import p5 from "p5";

const App = () => {
  const processingRef = useRef(null);
  // const [x, setX] = useState(100);

  const sketch = (p) => {
    let xspacing = 16; // Distance between each horizontal location
    let w; // Width of entire wave
    let theta = 0.0; // Start angle at 0
    let amplitude = 75.0; // Height of wave
    let period = 500.0; // How many pixels before the wave repeats
    let dx; // Value for incrementing x
    let yvalues; // Using an array to store height values for the wave

    p.setup = () => {
      p.createCanvas(710, 400);
      w = p.width + 17;
      dx = (p.TW0_PI / period) * xspacing;
      yvalues = new Array(p.floor(w / xspacing));
    };

    p.draw = () => {
      p.background(0);
      p.calcWave();
      p.renderWave();
    };

    p.calcWave = () => {
      // Increment theta (try different values for
      // 'angular velocity' here)
      theta += 0.02;

      // For every x value, calculate a y value with sine function
      let x = theta;
      for (let i = 0; i < yvalues.length; i++) {
        yvalues[i] = p.sin(x) * amplitude;
        x += dx;
      }
    };

    p.renderWave = () => {
      p.noStroke();
      p.fill(255);
      // A simple way to draw the wave with an ellipse at each location
      for (let x = 0; x < yvalues.length; x++) {
        p.ellipse(x * xspacing, p.height / 2 + yvalues[x], 16, 16);
      }
    };
  };

  useEffect(() => {
    //update sketch content
    const mySketch = new p5(sketch, processingRef.current);

    return () => {
      mySketch.remove();
      console.log("remove");
    };
  }, []);
  return (
    <div className="App">
      <div className="p5-react">
        <div ref={processingRef}> </div>
        {/* <input type="text" value={x} onChange={(e) => setX(e.target.value)} /> */}
      </div>
    </div>
  );
};

export default App;
