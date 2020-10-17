import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import BooksPage from "./pages/BooksPage";



function App() {
  return (
    <>
      <Header />
        <>
           <BooksPage />
        </>
      <Footer />
    </>
  );
}

export default App;
