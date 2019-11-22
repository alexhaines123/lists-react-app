import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {
  state = {
    texts : [
      {id: 1, value: ''},
      {id: 2, value: ''},
      {id: 3, value: ''}
    ]
  };

  getTextIndex = id => this.state.texts.findIndex(t => t.id === id);
  getText = index => { return {...this.state.texts[index]} };
  getTextById = id => this.getText(this.getTextIndex(id));

  getTexts = () => [...this.state.texts];

  changeListener = ( event, id ) => {
    const textIndex = this.getTextIndex(id);
    const text = this.getTextById(id);
    text.value = event.target.value;
    const texts = this.getTexts();
    texts[textIndex] = text;
    this.setState({texts : texts});
  };

  clickListener = ( letterIndex, id ) => {
    const textIndex = this.getTextIndex(id);
    const text = this.getTextById(id);
    console.log(letterIndex)
    const newText = text.value.split('');
    newText.splice(letterIndex, 1);
    text.value = newText.join('');
    const texts = this.getTexts();
    texts[textIndex] = text;
    this.setState({texts : texts});
  };

  render() {
    const texts = (
        <div>
          {this.state.texts.map(text => {
            return (
            <div key={text.id}>
              <Input
                changed={evt => this.changeListener(evt, text.id)}
                value={text.value}
              />
              <p>
                {text.value.length}
              </p>
              <ValidationComponent length={text.value.length}/>
              {text.value.split('').map( (char, index) => {
                return (
                    <CharComponent value={char} key={index} clicked={ _ => this.clickListener(index, text.id)}/>
                )
              })}
            </div>
            )
          })}
        </div>
    );

    return (
        <div className="App">
          <header>This is an app to test lists</header>
          {texts}
        </div>
    )
  }

}

export default App;
