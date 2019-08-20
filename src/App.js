import React, { Component } from "react";
import "./App.scss";

import Input from "./components/input/Input";
import Button from "./components/button/Button";
import List from './components/list/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      text: ' '
    }
  }

  handleInput = (event) => {
    this.setState({text: event.target.value});
  } 

  addList = (event) => {
    event.preventDefault();
    
    const { data, text } = this.state;
    let newList = data; 

    if(text !== ' ') {
      newList.push(text);
      this.setState({data: newList});
    }

    this.clearInput();
  }

  clearInput = () => {
    this.setState({text: ' '});
  }

  render() {
    return (
      <div className="container-form">
        <Input handlesText={(event => this.handleInput(event))} value={this.state.text} type="text" text="Insira uma tarefa"/>
        <Button handleClick={event => this.addList(event)} innerText="Salvar"/>

        <div className="container-list">
          {
            this.state.data.map((data, i) => {
              return (
                <List item={data} key={i} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
