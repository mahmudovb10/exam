import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";
import OrderModal from "./OrderModal";

export default function Cart() {
  const { cart, dispatch } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);

  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.amount, 0)
    .toFixed(2);

  const handleConfirm = () => {
    dispatch({ type: "CLEAR_CART" });
    setShowModal(false);
  };

  return (
    <div className="cart-container">
      <h2 className="basketTitle">Your Cart ({totalAmount})</h2>
      {cart.length === 0 ? (
        <div>
          <p>Cart bo'sh</p>
          <img
            className="cartImg"
            src="/images/illustration-empty-cart.svg"
            alt=""
          />
          <p className="basketText">Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p className="priceBasket">
                  <span className="amountBasket">{item.amount}×</span>
                  <span className="itemPrice">${item.price}</span>
                </p>
                <hr className="basketHr" />
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                X
              </button>
            </div>
          ))}

          <div className="cart-total">
            <span>Order Total: </span>
            <span>${totalPrice}</span>
          </div>

          <button
            className="confirm-order-btn"
            onClick={() => setShowModal(true)}
          >
            Confirm Order
          </button>
        </>
      )}

      {showModal && (
        <OrderModal
          cart={cart}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}
