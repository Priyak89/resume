import React, { Component } from "react";
import "./calculatorapp.css";
function MyCalculator() {
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
      <table>
        <tr>
          <td>
            <input
              placeholder="First Number"
              type="number"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
            ></input>
          </td>

          <td>
            <input
              placeholder="Second Number"
              type="number"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
            ></input>
          </td>
          <td>
            <input
              placeholder="Result"
              type="number"
              value={result}
              disabled={true}
            ></input>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <input
              class="row2"
              type="radio"
              name="calc"
              id="number1"
              value="number1"
              onChange={() => setButtonpress(1)}
            ></input>

            <label for="number1">Number 1 </label>
          </td>
          <td colspan="2">
            <input
              class="row2"
              type="radio"
              name="calc"
              id="number2"
              value="number2"
              onChange={() => setButtonpress(2)}
            ></input>

            <label for="number2">Number 2 </label>
          </td>
        </tr>
        <tr>
          <td>
            <button class="row3" onClick={Addtion}>
              +
            </button>
          </td>
          <td>
            <button class="row3" onClick={Subtraction}>
              -
            </button>
          </td>
          <td>
            <button class="row3" onClick={Multiplication}>
              *
            </button>
          </td>

          <td>
            <button class="row3" onClick={Division}>
              /
            </button>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button class="row4" onClick={Percentage}>
              %
            </button>
          </td>
          <td colSpan="2">
            <button class="row4" onClick={Reset}>
              R
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="1.5">
            <button class="row4" onClick={() => ClickHandler(1)}>
              1
            </button>
          </td>
          <td colspan="1.5">
            <button class="row4" onClick={() => ClickHandler(2)}>
              2
            </button>
          </td>
          <td colspan="1.5">
            <button class="row4" onClick={() => ClickHandler(3)}>
              3
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button class="row4" onClick={() => ClickHandler(4)}>
              4
            </button>
          </td>
          <td>
            <button class="row4" onClick={() => ClickHandler(5)}>
              5
            </button>
          </td>
          <td>
            <button class="row4" onClick={() => ClickHandler(6)}>
              6
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button class="row4" onClick={() => ClickHandler(7)}>
              7
            </button>
          </td>
          <td>
            <button class="row4" onClick={() => ClickHandler(8)}>
              8
            </button>
          </td>
          <td>
            <button class="row4" onClick={() => ClickHandler(9)}>
              9
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <button class="row0" onClick={() => ClickHandler(0)}>
              0
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default MyCalculator;
