import { Fragment, useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
function App() {

  const [viewCart, setViewCart] = useState(false)

  const handleCart = () => {
    setViewCart(prev => !prev)
    console.log(viewCart);
  }

  return (
    <Fragment>
    <Cart viewCart={viewCart} handleCart={handleCart}/>
      <Header handleCart={handleCart}/>
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
