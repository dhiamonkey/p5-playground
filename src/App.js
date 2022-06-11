import React, { useEffect, useRef } from "react";
import "./App.css";
import p5 from "p5";

function App() {
  const sketch = (p) => {
    let x = 100;
    let y = 100;

    p.setup = function () {
      p.createCanvas(770, 300);
    };

    p.draw = function () {
      p.background(0);
      p.fill(255);
      p.rect(x, y, 50, 50);
    };
  };

  useEffect(() => {
    //update sketch content
    const mySketch = new p5(sketch);

    return () => {
      console.log("cleaning up effect");
      mySketch.remove();
    };
  }, []);
  return <div className="App">test</div>;
}

export default App;
