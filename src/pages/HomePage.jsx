import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Sustainability from '../components/Sustainability';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import GetQuote from '../components/GetQuote';
import CO2Dashboard from '../components/CO2Savings/CO2Dashboard';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <GetQuote />
      <Sustainability />
      <CO2Dashboard/>
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;