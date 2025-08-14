export default function OrderModal({ cart, onClose, onConfirm }) {
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.amount, 0)
    .toFixed(2);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <img
          className="modalImg"
          src="/images/icon-order-confirmed.svg"
          alt=""
        />
        <h2 className="modalText">Order Confirmed</h2>
        <p className="modalDesc">We hope you enjoy your food!</p>

        <div className="ordertot">
          {cart.map((item) => (
            <p key={item.id}>
              {item.name} × {item.amount} — $
              {(item.price * item.amount).toFixed(2)}
            </p>
          ))}
        </div>

        <hr style={{ margin: "10px 0" }} />
        <h3>Total: ${totalPrice}</h3>

        <div style={styles.buttons}>
          <button className="modalBtn" onClick={onConfirm}>
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
};
