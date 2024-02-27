import Navbar from './components/navbar/Navbar';
// import Test from './Test';
import './app.scss';

const App = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar />
      </section>
      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
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
