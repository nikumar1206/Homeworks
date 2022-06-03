import React from "react";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    // const { num1: num1, num2: num2, result: result } = this.state;
    this.state = {
      num1: "",
      num2: "",
      result: 0,
    };
  }

  setNum1 = (e) => {
    e.preventDefault();
    this.setState({ num1: e.Target.value });
  };

  setNum2 = (e) => {
    e.preventDefault();
    this.setState({ num2: e.Target.value });
  };

  add = (e) => {
    e.preventDefault();
    this.setState({
      result: Number(this.state.num1) + Number(this.state.num2),
    });
  };

  subtract = (e) => {
    e.preventDefault();
    this.setState({
      result: Number(this.state.num1) - Number(this.state.num2),
    });
  };

  multiply = (e) => {
    e.preventDefault();
    this.setState({
      result: Number(this.state.num1) * Number(this.state.num2),
    });
  };

  divide = (e) => {
    e.preventDefault();
    this.setState({
      result: Number(this.state.num1) / Number(this.state.num2),
    });
  };

  clear = (e) => {
    e.preventDefault();
    this.setState({
      num1: "",
      num2: "",
      result: 0,
    });
  };

  render() {
    const { num1: num1, num2: num2, result: result } = this.state;
    return (
      <div>
        <br></br>
        <input type="string" id="num1" value={num1} onChange={this.setNum1} />
        <input type="string" id="num2" value={num2} onChange={this.setNum2} />

        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>

        <h1>{result}</h1>
        <br />
        <button onClick={this.clear}>Clear!</button>
      </div>
    );
  }
}
