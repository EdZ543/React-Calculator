import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const isOperator = /[+|\-|*|\/]/,
endsWithOperator = /[+|\-|*|\/]$/,
endsWithNegativeSign = /\d[+|\-|*|\/]-$/;

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "0" };

    this.onClick = this.onClick.bind(this);
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
  }

  onClick(e) {
    let button = e.target.textContent;
    let result = this.state.result + "";
    let numbers = result.split(isOperator);
    let number = numbers[numbers.length - 1];
    if (button == "=") {
      this.calculate();
    } else if (button == "AC") {
      this.reset();
    } else if (result == "0") {
      this.setState({
        result: button });

    } else if (button == "." && number.includes(".")) {
      this.setState({
        result: result });

    } else if (isOperator.test(button) && endsWithNegativeSign.test(result)) {
      this.setState({
        result: result.slice(0, -2) + button });

    } else if (
    isOperator.test(button) &&
    endsWithOperator.test(result) &&
    button != "-")
    {
      this.setState({
        result: result.slice(0, -1) + button });

    } else {
      this.setState({
        result: result + button });

    }
  }

  calculate() {
    this.setState({
      result: eval(this.state.result) });

  }

  reset() {
    this.setState({
      result: "0" });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calculator" }, /*#__PURE__*/
      React.createElement(Display, { result: this.state.result }), /*#__PURE__*/
      React.createElement(Buttons, { onClick: this.onClick })));


  }}


class Buttons extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.props.onClick }, "AC"), /*#__PURE__*/


      React.createElement("button", { id: "divide", onClick: this.props.onClick }, "/"), /*#__PURE__*/


      React.createElement("button", { id: "multiply", onClick: this.props.onClick }, "*"), /*#__PURE__*/


      React.createElement("button", { id: "one", onClick: this.props.onClick }, "1"), /*#__PURE__*/


      React.createElement("button", { id: "two", onClick: this.props.onClick }, "2"), /*#__PURE__*/


      React.createElement("button", { id: "three", onClick: this.props.onClick }, "3"), /*#__PURE__*/


      React.createElement("button", { id: "subtract", onClick: this.props.onClick }, "-"), /*#__PURE__*/


      React.createElement("button", { id: "four", onClick: this.props.onClick }, "4"), /*#__PURE__*/


      React.createElement("button", { id: "five", onClick: this.props.onClick }, "5"), /*#__PURE__*/


      React.createElement("button", { id: "six", onClick: this.props.onClick }, "6"), /*#__PURE__*/


      React.createElement("button", { id: "add", onClick: this.props.onClick }, "+"), /*#__PURE__*/


      React.createElement("button", { id: "seven", onClick: this.props.onClick }, "7"), /*#__PURE__*/


      React.createElement("button", { id: "eight", onClick: this.props.onClick }, "8"), /*#__PURE__*/


      React.createElement("button", { id: "nine", onClick: this.props.onClick }, "9"), /*#__PURE__*/


      React.createElement("button", { id: "zero", onClick: this.props.onClick }, "0"), /*#__PURE__*/


      React.createElement("button", { id: "decimal", onClick: this.props.onClick }, "."), /*#__PURE__*/


      React.createElement("button", { id: "equals", onClick: this.props.onClick }, "=")));




  }}


class Display extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", { id: "display" }, this.props.result);
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("app"));