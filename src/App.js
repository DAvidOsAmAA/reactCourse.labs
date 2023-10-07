import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Home from './component/Home/Home';


class App extends Component {
  render(){
  return (
   <Home />
  )}
}

export default App;
