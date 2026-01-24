import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import Carousel from '../components/landing/Carousel';
import About from '../components/landing/About';
import Services from '../components/landing/Services';
import Portfolio from '../components/landing/Portfolio';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';
import '../index.css'; 

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#5B3765] text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Carousel />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;


