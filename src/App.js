import React, {Component} from 'react'
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.css';
import {connect, sendMsg} from './api'


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          chatHistory: [] // Исправлено: неверное использование символа 'с' вместо 'c'
      };
  }

  componentDidMount() {
      connect((msg) => {
          console.log('New Message:', msg);
          this.setState(prevState => ({
              chatHistory: [...prevState.chatHistory, msg]
          }));
      });
  }

  send = (event) => {
      if (event.key === 'Enter') {
          sendMsg(event.target.value);
          event.target.value = ''; // Очистка поля ввода после отправки
      }
  }

  render() {
      return (
          <div className='App'>
              <Header />
              <ChatHistory chatHistory={this.state.chatHistory} />
              <ChatInput send={this.send} />
          </div>
      );
  }
}

export default App;
