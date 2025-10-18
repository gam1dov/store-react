import { useDispatch } from "react-redux";
import { formatPrice, generateArrayElements } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  function removeItemFromTheCart() {
    dispatch(removeItem({ cartID }));
  }

  function handleAmount(e) {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  }

  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  return (
    <article
      key={cartItem.cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      <div className="sm:ml-16 sm:w-44">
        <h3 className="capitilize font-medium">{title}</h3>
        <h4 className="mt-4 capitilize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-2 text-sm capitalize flex items-center gap-x-2">
          цвет:{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="form-control max-w-sm">
          <label htmlFor="amount" className="label-p-8">
            <span className="label-text">Количество</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateArrayElements(amount + 5).map((amount) => {
              return (
                <option key={amount} value={amount}>
                  {amount}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          Удалить
        </button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
}

export default CartItem;
