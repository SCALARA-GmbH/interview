import React from 'react';
//import logo from './logo.svg';
import './App.css';

interface IMyComponentState {
  showContent: boolean,
  valueTitle: string,
  valueContent: string
}

class Form extends React.Component<{}, IMyComponentState> {
  constructor(props: any) {
    super(props);
    //this.state = {value: ''};
    this.state = {
      valueTitle: '',
      valueContent: '',
      showContent: false
    }
    

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event: any) {
    this.setState({valueTitle: event.target.value});
  }

  handleChangeContent(event: any) {
    this.setState({valueContent: event.target.value});
  }

  handleSubmit(event: any) {
    this.setState({
      showContent: true
    });
    
    /*alert('A name was submitted: ' + this.state.value);*/
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.valueTitle} onChange={this.handleChangeTitle} />
          </label>

          <label>
            Content:
            <textarea value={this.state.valueContent} onChange={this.handleChangeContent} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* <p>{`${this.state.value}`}</p> */}
        {this.state.showContent && <p>Title: {this.state.valueTitle}</p>}
        {this.state.showContent && <p>Content: {this.state.valueContent}</p>}
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <div>
        
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
