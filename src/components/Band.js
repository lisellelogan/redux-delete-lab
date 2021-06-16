import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <br/>
        <button onClick={this.handleOnClick}>
          Delete
        </button>
      </div>
    );
  }
};

export default Band;
