import { Component } from "react";
import "./style.css";

export class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <button onClick={onClick} className="button">
        {text}
      </button>
    );
  }
}
