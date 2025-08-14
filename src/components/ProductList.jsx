import { useGlobalContext } from "../hooks/useGlobalContext";

export default function ProductList({ products }) {
  const { cart, dispatch } = useGlobalContext();

  return (
    <div className="product-list">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);

        return (
          <div key={product.id} className="product-card">
            <picture>
              <source
                srcSet={product.image.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={product.image.tablet}
                media="(min-width: 768px)"
              />
              <source
                srcSet={product.image.mobile}
                media="(max-width: 767px)"
              />
              <img
                src={product.image.thumbnail}
                alt={product.name}
                loading="lazy"
              />
            </picture>
            <h5 className="prod-category">{product.category}</h5>
            <h3 className="name">{product.name}</h3>
            <p className="price">{product.price} $</p>

            {cartItem ? (
              <div className="prodBtn">
                <button
                  className="minus"
                  onClick={() =>
                    dispatch({ type: "DECREASE_AMOUNT", payload: product.id })
                  }
                >
                  -
                </button>
                <span className="prodAmount">{cartItem.amount}</span>
                <button
                  className="plus"
                  onClick={() =>
                    dispatch({ type: "INCREASE_AMOUNT", payload: product.id })
                  }
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="add-btn"
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: product })
                }
              >
                <img
                  className="btn-img"
                  src="/public/images/icon-add-to-cart.svg"
                  alt=""
                />
                Add to Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
