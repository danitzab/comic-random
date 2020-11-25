import React from 'react';

//Components
import ComicRating from './components/ComicRating';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="container-app container mx-auto px-4 mt-10 text-center">
        <ComicRating />
      </div>
      <Footer />
    </>
  );
}

export default App;
