import Header from './components/Header';
import Hero from './components/Hero';
import AvailableMeals from './components/AvailableMeals';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import { useState } from 'react';
import Footer from './components/UI/Footer';
import { Route, Switch, Redirect } from 'react-router';
function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      {showModal && <Cart onHide={hideModalHandler} />}
      <Header onShow={showModalHandler} />

      <Switch>
        <Route path="/" exact>
          <Redirect to="/available-meals" />
        </Route>
        <Route path="/available-meals">
          <Hero />
          <AvailableMeals />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
