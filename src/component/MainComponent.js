import React from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent'
import About from './AboutComponent'
import { BrowserRouter, Routes, Route, Navigate,useParams } from 'react-router-dom';
import { DISHES } from '../shared/Dish';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';

function Main (){
  var dishes=DISHES;
  var comments=COMMENTS;
  var promotions=PROMOTIONS;
  var leaders=LEADERS;

    const HomePage = () => {
      return (
        <Home
          dish={dishes.filter((dish) => dish.featured === true)[0]}
          promotion={promotions.filter((promo) => promo.featured === true)[0]}
          leader={leaders.filter((leader) => leader.featured === true)[0]}
        />
      );
    }
    const DishWithId = () => {
       const {dishId}=useParams();
       console.log(dishId);

      return (
        <DishDetail dish={dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
          comments={comments.filter((comment) => comment.dishId === parseInt(dishId, 10))} />
      );

    }
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route exact path='/menu' element={<Menu dishes={dishes} />} />
            <Route path='/menu/:dishId' element={<DishWithId />} />
            <Route exact path='/contactus' element={<Contact />} />
            <Route exact path='/aboutus' element={<About leaders={LEADERS}/>} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }

export default Main;