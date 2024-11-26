import React, { Component } from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: string;
}

class Button extends Component<ButtonProps> {
  static defaultProps = {
    style: 'bg-gray-300 text-black',
  };

  render() {
    const { text, onClick, style } = this.props;

    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded shadow hover:opacity-90 transition  text-white ${style}`}
      >
        {text}
      </button>
    );
  }
}

export default Button;
