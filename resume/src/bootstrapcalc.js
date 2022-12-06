import React, { Component } from "react";
import "./calculatorapp.css";
function MyCalculatorBoot() {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [result, setResult] = React.useState(0);
  const [buttonpress, setButtonpress] = React.useState();

  function Addtion() {
    setResult(parseInt(number1) + parseInt(number2));
  }
  function Subtraction() {
    setResult(parseInt(number1) - parseInt(number2));
  }
  function Multiplication() {
    setResult(parseInt(number1) * parseInt(number2));
  }
  function Division() {
    setResult(parseInt(number1) / parseInt(number2));
  }
  function Percentage() {
    setResult((parseInt(number1) / parseInt(number2)) * 100);
  }
  function Reset() {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
  }
  function ClickHandler(inputValue) {
    const newNum = inputValue.toString();
    if (buttonpress === 1) setNumber1(number1 + newNum);
    else setNumber2(number2 + newNum);
  }

  return (
    <div>
      <h3>My Calculator</h3>

      <div class="container">
        <div class="row">
          <input
            class="col-sm"
            placeholder="First Number"
            type="number"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          ></input>

          <input
            class="col"
            placeholder="Second Number"
            type="number"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          ></input>
        </div>

        <div class="row">
          <input
            class="col"
            placeholder="Result"
            type="number"
            value={result}
            disabled={true}
          ></input>
        </div>
        <div class="row">
          <input
            class="row2 col-sm-4"
            type="radio"
            name="calc"
            id="number1"
            value="number1"
            onChange={() => setButtonpress(1)}
          ></input>

          <label for="number1">Number 1 </label>

          <input
            class="row2 col-sm-4"
            type="radio"
            name="calc"
            id="number2"
            value="number2"
            onChange={() => setButtonpress(2)}
          ></input>

          <label for="number2">Number 2 </label>
        </div>
        <div class="row">
          <button class="row3 col-sm-3" onClick={Addtion}>
            +
          </button>

          <button class="row3 col-sm-3" onClick={Subtraction}>
            -
          </button>

          <button class="row3 col-sm-3" onClick={Multiplication}>
            *
          </button>

          <button class="row3 col-sm-3" onClick={Division}>
            /
          </button>
        </div>
        <div class="row">
          <button class="rowreset col-sm-6" onClick={Percentage}>
            %
          </button>

          <button class="rowreset col-sm-6" onClick={Reset}>
            R
          </button>
        </div>
        <div class="row">
          <button
            class="row123 col-sm-4 col-md-3"
            onClick={() => ClickHandler(1)}
          >
            1
          </button>

          <button
            class="row123 col-sm-4 col-md-3"
            onClick={() => ClickHandler(2)}
          >
            2
          </button>

          <button
            class="row123 col-sm-4 col-md-3"
            onClick={() => ClickHandler(3)}
          >
            3
          </button>

          <button
            class="row456 col-sm-4 col-md-3"
            onClick={() => ClickHandler(4)}
          >
            4
          </button>

          <button
            class="row456 col-sm-4 col-md-3"
            onClick={() => ClickHandler(5)}
          >
            5
          </button>

          <button
            class="row456 col-sm-4 col-md-3"
            onClick={() => ClickHandler(6)}
          >
            6
          </button>

          <button
            class="row789 col-sm-4 col-md-3"
            onClick={() => ClickHandler(7)}
          >
            7
          </button>

          <button
            class="row789 col-sm-4 col-md-3"
            onClick={() => ClickHandler(8)}
          >
            8
          </button>

          <button
            class="row789 col-sm-4 col-md-3"
            onClick={() => ClickHandler(9)}
          >
            9
          </button>
        </div>
        <div class="row">
          <button class="row0 col-sm-12" onClick={() => ClickHandler(0)}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}
export default MyCalculatorBoot;
