import Header from "./common/header";
import { Provider } from 'react-redux'
import { Component } from "react";
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Header></Header>
      </Provider>
    )
  }
}

export default App;
