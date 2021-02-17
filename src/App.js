import {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import {Login,Editor,Puplish,Packges,Preview} from './pages';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/packges" component={Packges} />
        <Route path="/editor" component={Editor} />
        <Route path="/puplish" component={Puplish} />
        <Route path="/preview" component={Preview} />
      </BrowserRouter>
    </div>
  );
}

export default App;
