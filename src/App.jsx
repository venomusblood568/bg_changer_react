import { useState } from 'react';
import './App.css';

function App() {
  
  const default_colour = "black";
  const gradient_blue = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,113,1) 35%, rgba(0,212,255,1) 100%)';
  const gradient_pink = 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)';
  const [color, setColor] = useState(default_colour);

  //Function to generate a random color in hexadecimal format
  const getRandomColor = () => {
    const letter = '0123456789ABCDEF';
    let color = "#";
    for(let i = 0; i < 6; i++){
      color += letter[Math.floor(Math.random()*16)];
    }
    return color;
  };

  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
        <button
            onClick={() => setColor(gradient_blue)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-2 p-2"
            style={{ background: gradient_blue}}
          >
            Blue Gradient
          </button>

          
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-2 p-2"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-2 p-2"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          
          <button
            onClick={() => setColor(default_colour)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-2 p-2"
            style={{ backgroundColor: "black" }}
          >
            Default Color
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-2 p-2"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-2 p-2"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor(gradient_pink)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-2 p-2"
            style={{ background: gradient_pink }}
          >
            Pink Gradient
          </button>
          
          <button
            onClick={() => setColor(getRandomColor())}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg m-2 p-2"
            style={{ backgroundColor: "#000" }}  // Initial button color
          >
           Random color
          </button>


        </div>
      </div>
    </div>
  );
}

export default App;
