import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log("Counter - Rendered");

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClass()}>{this.fillCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-success m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-success m-2"
            disabled={this.props.counter.value === 0 ? "true" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClass = () => {
    let classes = "badge m-2 badge-";
    const { value } = this.props.counter;
    classes += value === 0 ? "warning" : "primary";
    return classes;
  };

  fillCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
