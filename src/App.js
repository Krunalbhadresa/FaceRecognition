import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

 
const app = new Clarifai.App({
 apiKey: 'f40704c26ff641b1a964adfc5962693a'
});

const particlebg = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state= {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  onButtonSubmit = (event) => {
    app.models.predict(
      Clarifai.COLOR_MODEL,
      "https://samples.clarifai.com/metro-north.jpg"
      )
    .then(
      function(response) {
        console.log(response);
      },
      function(err) {

      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlebg} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App;
