"use client"; // tells next.js this file must run on the client side

import React from 'react';
import { useState } from 'react';
import '../styles/output.css'; // imports tailwind output styles (base, components, utilities)

// define the calculator component
const Calculator = () => {
  // state to hold current input
  const [input, setInput] = useState('');

  // handle button clicks by appending the clicked value to the current input
  const handleClick = (value) => {
    setInput(prev => prev + value);
  };

  // calculate result using eval (for demo only)
  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // clear input by resetting it to an empty string
  const clearInput = () => {
    setInput('');
  };

  // delete the last character from the input
  const deleteLast = () => {
    setInput(prev => prev.slice(0, -1));
  };

  // render the calculator ui with a black bg and neon colors
  return (
    <div 
      // container with a black bg, rounded corners, a shadow, and a hover scale effect
      className=" p-6 bg-black rounded-xl"
    >
      {/* display area with neon green text and a test id for unit tests */}
      <div 
        data-testid="display"
        className="bg-gray-900 border border-neon-green rounded p-4 mb-4 text-right text-4xl font-bold text-neon-green"
      >
        {input || "0"}
      </div>
      {/* grid of calculator buttons */}
      <div className="grid grid-cols-4 gap-4">
        {/* clear button spans two columns */}
        <button 
          className="min-w-40 col-span-2 bg-neon-pink hover:bg-neon-yellow text-black py-4 rounded-lg text-xl font-bold transform transition duration-500 hover:scale-105"
          onClick={clearInput}
        >
          C
        </button>
        {/* delete button */}
        <button 
          className="min-w-10 bg-neon-cyan hover:bg-neon-yellow hover:text-neon-pink hover:text-xl hover:font-bold  text-neon-pink py-4 rounded-lg text-xl font-bold transform transition duration-500 hover:scale-105"
          onClick={deleteLast}
        >
          DEL
        </button>
        {/* division button */}
        <button 
          className="bg-neon-green hover:bg-neon-yellow text-black py-4 rounded-lg text-xl font-bold transform transition duration-500 hover:scale-105"
          onClick={() => handleClick('/')}
        >
          ÷
        </button>
        {/* mapping through digit and operator buttons */}
        {["7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", "="].map((btn, index) => {
          // if the button is equals, handle it differently
          if (btn === "=") {
            return (
              <button
                key={index}
                className="col-span-2 bg-neon-green hover:bg-neon-yellow text-black py-4 rounded-lg text-xl font-bold transform transition duration-500 hover:scale-105"
                onClick={calculateResult}
              >
                {btn}
              </button>
            );
          }
          if (btn === "*") {
            return (
              <button
                key={index}
                className="bg-neon-green hover:bg-neon-yellow text-black py-4 rounded-lg text-xl font-bold transform transition duration-500 hover:scale-105"
                onClick={() => handleClick('*')}
              >
                x
              </button>
            );
          }
          if (btn === "-") {
            return (
              <button
                key={index}
                className="bg-neon-green hover:bg-neon-yellow text-black py-4 rounded-lg text-xl font-bold transform transition duration-500 hover:scale-105"                onClick={() => handleClick('-')}
              >
                -
              </button>
            );
          }
          if (btn === "+") {
            return (
              <button
                key={index}
                className="bg-neon-green hover:bg-neon-yellow text-black py-4 rounded-lg text-xl font-bold transform transition duration-500 hover:scale-105"
                onClick={() => handleClick('+')}
              >
                +
              </button>
            );
          }
          if (btn === ".") {
            return (
              <button
                key={index}
                className="bg-neon-green hover:bg-neon-yellow text-black py-4 rounded-lg text-xl font-bold transform transition duration-500 hover:scale-105"
                onClick={() => handleClick('.')}
              >
                .
              </button>
            );
          }
          // default button styling
          return (
            <button
              key={index}
              className="bg-gray-800 hover:bg-neon-yellow hover:text-neon-pink text-neon-green py-4 rounded-lg text-xl font-bold"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator; // export as default so we can import it easily
