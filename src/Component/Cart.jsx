import React, { useState, useEffect } from "react";
import { dltCart } from "../Redux/action/index";
import { addCart } from "../Redux/action/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Cart() {
  {
    /* const{id} = useParams(); */
  }
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.handleCart);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const handleButton = (product) => {
    {
      /* const spro = product.filter((x)=> x.id!== product.id); */
    }

    dispatch(dltCart(product));
    // calculate();
  };

  const handlePButton = (product) => {
    dispatch(addCart(product));
    // calculate();
  };

  const cartItems = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div key={product.id} className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty} X ${product.price} = $
                {product.qty * product.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleButton(product)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handlePButton(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return <h2>Cart is empty.....</h2>;
  };
 

  
  useEffect(() => {
    let total = 0;

    state.forEach((element) => {
      const result = element.qty * element.price;
      total = total + result;
    });
    console.log(total);

    fprice(total);
  }, [state]);

  const [price, fprice] = useState(0);

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      <h1 className=" mx-5 my-4">{`your total cart value is :${price}`}</h1>
    </>
  );
}

export default Cart;
