import React, { useEffect } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent'
import About from './AboutComponent'
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchDishes, fetchComments, fetchPromos } from '../Redux/ActionCreator';

function Main() {
  var dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchComments());
    dispatch(fetchPromos());
  }, []);

  var dishes = useSelector((state) => state.dishes.dishes);
  var isLoading = useSelector((state) => state.dishes.isLoading);
  var isPromosLoading = useSelector((state) => state.promotions.isLoading);
  var promosErrMess = useSelector((state) => state.promotions.errMess);
  var commentsErrMess = useSelector((state) => state.comments.errMess);
  var errMess = useSelector((state) => state.dishes.errMess);
  var comments = useSelector((state) => state.comments.comments);
  var promotions = useSelector((state) => state.promotions.promotions);
  var leaders = useSelector((state) => state.leaders);

  const HomePage = () => {
    return (
      <Home
        dish={dishes.filter((dish) => dish.featured === true)[0]}
        promotion={promotions.filter((promo) => promo.featured === true)[0]}
        isPromosLoading={isPromosLoading}
        promosErrMess={promosErrMess}
        commentsErrMess={commentsErrMess}
        leader={leaders.filter((leader) => leader.featured === true)[0]}
        isLoading={isLoading}
        errMess={errMess}
      />
    );
  }
  const DishWithId = () => {
    const { dishId } = useParams();
    return (
      <DishDetail
        dish={dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
        comments={comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
        dishId={dishId}
        isLoading={isLoading}
        errMess={errMess}
        commentsErrMess={commentsErrMess}
      />
    );

  }
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route exact path='/menu' element={<Menu dishes={dishes} isLoading={isLoading} errMess={errMess} />} />
        <Route path='/menu/:dishId' element={<DishWithId />} />
        <Route exact path='/contactus' element={<Contact />} />
        <Route exact path='/aboutus' element={<About leaders={leaders} />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;