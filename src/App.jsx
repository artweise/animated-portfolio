import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import ParallaxPhoto from './components/parallaxPhoto/ParallaxPhoto';
// import Test from './Test';
import './app.scss';

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>Services</section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <section id='Photo'>
        <ParallaxPhoto />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contacts</section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
