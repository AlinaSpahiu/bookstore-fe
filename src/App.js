import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BooksPage from "./pages/BooksPage";
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage'
import CartPage from './pages/CartPage/CartPage'
import LoginPage from './pages/LoginPage/LoginPage'



function App() {
  return (
    <Router>
      <Header />
        <>
           <Route path='/login' component={LoginPage} exact/>
           <Route path='/books' component={BooksPage} exact />
           <Route path='/book/:id' component={BookDetailsPage} exact />
           <Route path='/cart/:id?' component={CartPage} exact />
        </>
      <Footer />
    </Router>
  );
}

export default App;
