import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import EditItem from './components/EditItem';
import ItemDetails from './components/ItemDetails';
import Manage from './components/Manage';
import Login from './components/Login';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/catalog' exact component={Catalog} />
            <Route path='/manage' exact component={Manage}/>
            <Route path='/contact' component={Contact} />
            <Route path='/edititemform/:id' exact component={EditItem} />
            <Route path="/:id"  component={ItemDetails} />
            
          </Switch>
          <Login/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
