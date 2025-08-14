export default function OrderModal({ cart, onClose, onConfirm }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} × {item.amount} — $
            {(item.price * item.amount).toFixed(2)}
          </p>
        ))}
        <div style={styles.buttons}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
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
    justifyContent: "space-between",
    marginTop: "20px",
  },
};
