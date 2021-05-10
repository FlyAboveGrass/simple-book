import Header from "./common/header";
import { Provider } from 'react-redux'
import { Component } from "react";
import store from './store'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
        { /*  一定要有一个div 作为顶层容器 */}
          <div>
            <Header></Header>
            <Route path="/" exact component={ Home }></Route>
            <Route path="/login" exact component={ Login }></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
