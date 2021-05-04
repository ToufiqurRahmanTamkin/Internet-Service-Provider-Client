import React from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import AllSupport from './AllSupport';
import Testimonials from './Testimonials';
import Footer from '../Footer/Footer';
import './Home.css';
import Faq from './Faq';

const Home = () => {
   return (
      <div>
         <Header />
         <Services />
         <About />
         <AllSupport />
         <Testimonials />
         {/* other services */}
         <Faq />
         <Footer />
      </div>
   );
};

export default Home;
