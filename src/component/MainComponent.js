import React, { Component } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../Dish';
import {BrowserRouter,Routes, Route,Navigate } from 'react-router-dom';
import Home from './HomeComponent'
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish:null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    function HomePage() {
      return (
        <Home />
      );
    }
    return (
      <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path='/home' element={<HomePage/>}/>
          <Route exact path='/menu' element={<Menu dishes={this.state.dishes}/>}/>
          {/* <Redirect path='/home'/> */}
          {/* <Navigate path='/home'/> */}
          <Route path="*" element={<Navigate to ="/home" />}/>
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default Main;