import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      file: logo
    }
  }

  fileSelectedHandler = event => {
    console.log(event.target);
    this.setState ({
      file: URL.createObjectURL(event.target.files[0])
    });
  };

  fileUploadedHandler = event => {
    console.log("Upload");
    // TODO: Upload image.
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.file} className="App-logo" alt="logo" />
          <input type="file" onChange={this.fileSelectedHandler}></input>
          <button onClick={this.fileUploadedHandler}>Upload</button>
        </header>
  
      </div>
    );
  };
}

export default App;
