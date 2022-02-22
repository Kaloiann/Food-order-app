import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {
  const [isvisible, setIsVisible] = useState(false)

  const showHandler = () => {
    setIsVisible(true)
  }
  const closeHandler = () => {
    setIsVisible(false)
  }

  return (
    <CartProvider>
     {isvisible && <Cart  closeHandler={closeHandler}/>} 
     <Header showHandler={showHandler} />
     <main>
      <Meals/>
     </main>
    </CartProvider>
  );
}

export default App;
