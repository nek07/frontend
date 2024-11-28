import React, {Component} from 'react'
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.css';
import {connect, sendMsg} from './api'


class App extends Component() {
  contructor(props){
    super(props);
    this.state = {
      ChatHistory: []
    }
  }
  componentDidMount(){
<<<<<<< HEAD
    connect((msg) => {
      console.log('New Message')
      this.setState(prevState => ({
        chatHistory: {...prevState.chatHistory, msg}
      }))
      console.log(this.state);
    });
  }
  render(){
    return(
      <div className='App'>
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory}/>
        <ChatInput send={this.send}/>
      </div>
    )
=======
    
>>>>>>> 4796999397344d406e9756d0f1c7cd701b55e88a
  }
}

export default App;
