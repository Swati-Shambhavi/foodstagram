import Header from './components/Header';
import Hero from './components/Hero';
import AvailableMeals from './components/AvailableMeals';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import { useState, useContext } from 'react';
import Footer from './components/UI/Footer';
import Authenticate from './pages/Authenticate';
import { Route, Switch, Redirect } from 'react-router';
import CartContext from './store/cart-context';
function App() {
  const [showModal, setShowModal] = useState(false);
  const cartCtx = useContext(CartContext);
  const showModalHandler = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      {!cartCtx.isLoggedIn && <Authenticate />}
      {cartCtx.isLoggedIn && (
        <>
          {showModal && <Cart onHide={hideModalHandler} />}
          <Header onShow={showModalHandler} />

          <Switch>
            <Route path="/" exact>
              <Redirect to="/available-meals" />
            </Route>
            {!cartCtx.isLoggedIn && (
              <Route path="/login">
                <Authenticate />
              </Route>
            )}
            <Route path="/available-meals">
              <Hero />
              <AvailableMeals />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {cartCtx.isLoggedIn && (
              <Route path="/contact">
                <Contact />
              </Route>
            )}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
