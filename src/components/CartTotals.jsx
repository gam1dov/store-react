import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

function CartTotals() {
  const { cartTotal, shipping, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Промежуточный итог</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Доставка</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        <p className="flex justify-between text-sm mt-4  pb-2">
          <span>Итог</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
}

export default CartTotals;
