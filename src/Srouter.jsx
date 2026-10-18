import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './Component/Cart';
import Home from './Component/Home';
import MSignin from './Component/MSignin';
import Productsj from './Component/Productsj';
import Signup from './Component/Signup';
import Product from './Product';

function Srouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<Productsj />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<MSignin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default Srouter;
