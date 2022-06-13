import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import p5 from "p5";

const App = () => {
  const processingRef = useRef();
  const [x, setX] = useState(100);

  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(590, 300).parent(processingRef.current);
    };

    p.draw = () => {
      p.background(0);
      p.fill(255);
      p.rect(x, 100, 50, 50);
    };
  };
  console.log(x);
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
        <input type="text" value={x} onChange={(e) => setX(e.target.value)} />
      </div>
    </div>
  );
};

export default App;
