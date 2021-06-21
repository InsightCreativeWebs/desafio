import React, {Component} from 'react';

import Header from './components/header/header';
import Menu from './components/menu/menu';

import './global.scss'


class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Menu />
      </div>
    )
  }
}


export default App;
