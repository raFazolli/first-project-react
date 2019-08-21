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

  addList = () => {
    const { data, text } = this.state;

    if(text !== ' ') {
      this.setState({data: [...data, text], text: ' '});
    }
  }

  handleKeyPress = event => {
    if(event.key === 'Enter') {
      this.addList();
    }
  }

  removeListItem = (itemList) => {
    this.setState({data: this.state.data.filter(item => item !== itemList)});
  }

  render() {
    return (
      <div className="container-form">
        <Input handlesText={(event => this.handleInput(event))} keyPress={this.handleKeyPress} value={this.state.text} type="text" text="Insira uma tarefa"/>
        <Button handleClick={() => this.addList()} innerText="Salvar"/>

        <div className="container-list">
          {
            this.state.data.map((data, i) => {
              return (
                <List item={data} removeItem={() => this.removeListItem(data)} key={i} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
