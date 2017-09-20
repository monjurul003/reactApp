import React, { Component } from 'react';
import '../App.css';

class InputBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      placeholderValue: props.inputvalue,
      placeholderValueOne: props.inputvalue + "One",
      sum: 0,
      numone: 1,
      numtwo: 1,
    }
  
  }
  
  changeName(){
  
  this.setState ({
    sum:this.state.numone + this.state.numtwo,
    placeholderValue: "Whats your name",
    placeholderValueOne: this.props.inputvalue + " Changed",
  }); 

  }
  setValue(event){
  this.setState({
    numone:event.target.value,
    sum: this.state.numone,
  })

  }

  render() {
    return (
      <div className="Input-box">
        <label> {this.state.sum}</label>
        <input type="number" id="numone" placeholder={this.state.placeholderValue} onChange={(event)=>this.setValue(event)}/>
        <input type="number" id="numtwo" placeholder={this.state.placeholderValueOne} onChange={(event)=>this.setValue(event)}/>
        <button onClick={this.changeName.bind(this)}>Click Here</button>
      </div>
      );
  }
}

export default InputBox;
