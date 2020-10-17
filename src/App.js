import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import BooksPage from "./pages/BooksPage";
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage'



function App() {
  return (
    <Router>
      <Header />
        <>
           <Route path='/books' component={BooksPage} exact />
           <Route path='/book/:id' component={BookDetailsPage} exact />
        </>
      <Footer />
    </Router>
  );
}

export default App;
