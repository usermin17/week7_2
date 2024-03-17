// App.js
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import DestinationsSection from './DestinationsSection';
import ContactForm from './ContactForm';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <DestinationsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
